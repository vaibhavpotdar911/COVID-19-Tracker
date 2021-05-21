import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Covid19apiService {

  constructor(public http:HttpClient) { }

  public covid19Reports() {
    return this.http.get("https://corona.lmao.ninja/v3/covid-19/countries");
  }

}
