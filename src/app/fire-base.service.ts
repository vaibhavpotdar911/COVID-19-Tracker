import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class FireBaseService {

  constructor(private firestore: AngularFirestore) { }

  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    title: new FormControl(''),
    comment: new FormControl('')
  });

  //Firestore CRUD actions example
  createCoffeeOrder(data: unknown) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("coffeeOrders")
        .add(data)
        .then(res => { }, err => reject(err));
    });
  }

  updateCoffeeOrder(data: { payload: { doc: { id: string | undefined; }; }; }) {
    return this.firestore
      .collection("coffeeOrders")
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge: true });
  }

  getCoffeeOrders() {
    return this.firestore.collection("coffeeOrders").snapshotChanges();
  }

  deleteCoffeeOrder(data: { payload: { doc: { id: string | undefined; }; }; }) {
    return this.firestore
      .collection("coffeeOrders")
      .doc(data.payload.doc.id)
      .delete();
  }
}
