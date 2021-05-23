import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Feedback } from 'src/app/Feedback';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.css']
})
export class AddFeedbackComponent implements OnInit {
  @Output() feedbackAdd: EventEmitter<Feedback> = new EventEmitter();
  @Input() deviceXs: boolean;
  sno!: number;
  name!: string;
  email!: string;
  title!: string;
  description!: string;
  active!: boolean;
  constructor() { }

  ngOnInit(): void {
  }
  taskIndex: number = 1;
  onSubmit() {
    const feedback = {
      sno: this.taskIndex,
      name: this.name,
      email: this.email,
      title: this.title,
      description: this.description,
      active: true
    }
    this.feedbackAdd.emit(feedback);
    this.taskIndex += 1;
  }
}
  

