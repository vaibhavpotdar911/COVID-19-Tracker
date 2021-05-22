
import { Component, OnInit } from '@angular/core';
import { Feedback } from '../Feedback';


@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent implements OnInit {
  localItem: any;
  feedbacks: Feedback[];

  constructor() { 
    this.localItem = localStorage.getItem("feedbacks");
    if(this.localItem==null ) {
      this.feedbacks = [];
    } else {
      this.feedbacks = JSON.parse(this.localItem)
    }
   }

  ngOnInit(): void {
  }
  deleteFeedback(feedback: Feedback) {
    console.log(feedback);
    const index = this.feedbacks.indexOf(feedback);
    this.feedbacks.splice(index, 1);
    localStorage.setItem("feedbacks", JSON.stringify(this.feedbacks));

  }
  addFeedback(feedback: Feedback) {
    console.log(feedback);
    this.feedbacks.push(feedback);
    localStorage.setItem("feedbacks", JSON.stringify(this.feedbacks));
  }
  toggleFeedback(feedback: Feedback) {
    const index = this.feedbacks.indexOf(feedback);
    this.feedbacks[index].active = !this.feedbacks[index].active
    localStorage.setItem("feedbacks", JSON.stringify(this.feedbacks));
  }

}
