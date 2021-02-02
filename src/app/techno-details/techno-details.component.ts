import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Technology } from '../models/technology';

@Component({
  selector: 'app-techno-details',
  templateUrl: './techno-details.component.html',
  styleUrls: ['./techno-details.component.css'],
})
export class TechnoDetailsComponent implements OnInit {
  @Input() tech: Technology; // parent vers enfant
  @Output() deleteTech = new EventEmitter<Technology>(); // enfant vers parent

  constructor() {}

  ngOnInit(): void {}

  delete(tech: Technology) {
    console.log('delete', tech);
    this.deleteTech.emit(tech);
  }
}
