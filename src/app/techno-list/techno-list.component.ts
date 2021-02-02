import { Component, OnInit } from '@angular/core';
import { Technology } from '../models/technology';
import { TechnoService } from '../services/techno.service';

@Component({
  selector: 'app-techno-list',
  templateUrl: './techno-list.component.html',
  styleUrls: ['./techno-list.component.css'],
})
export class TechnoListComponent implements OnInit {
  alltechnos = [];

  constructor(private ts: TechnoService) {}

  ngOnInit(): void {
    this.getTechnos(); // appelé dés que le composant est initialisé
  }

  getTechnos() {
    this.alltechnos = this.ts.getTechnos();
  }

  deleteTechno(techno: Technology) {
    console.log('deleteTechno', techno);
    this.ts.deletedTechno(techno);
    this.alltechnos = this.ts.getTechnos();
  }
}
