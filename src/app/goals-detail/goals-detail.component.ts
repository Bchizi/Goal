import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goals-detail',
  templateUrl: './goals-detail.component.html',
  styleUrls: ['./goals-detail.component.css']
})
export class GoalsDetailComponent implements OnInit {

  @Input() goal: Goal;
  @Output() isComplete = new EventEmitter<boolean>();

  goalDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}
