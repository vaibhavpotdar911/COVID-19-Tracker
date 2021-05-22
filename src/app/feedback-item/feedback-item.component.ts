
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Feedback } from '../Feedback';
@Component({
  selector: 'app-feedback-item',
  templateUrl: './feedback-item.component.html',
  styleUrls: ['./feedback-item.component.css']
})
export class FeedbackItemComponent implements OnInit {

  @Input()
  feedback!: Feedback;
  @Input()
  i!: number;

  @Output() feedbackDelete: EventEmitter<Feedback> = new EventEmitter();
  @Output() feedbackCheckbox: EventEmitter<Feedback> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }
  onClick(feedback: Feedback) {
    this.feedbackDelete.emit(feedback);
    console.log("onClick has been trigerred");
  }

  onCheckboxClick(feedback:any){
    this.feedbackCheckbox.emit(feedback);
  }

}
