import { Component, OnInit } from '@angular/core';
import { WorldwideCovidService } from "../worldwide-covid.service";

@Component({
  selector: 'app-vaccination',
  templateUrl: './vaccination.component.html',
  styleUrls: ['./vaccination.component.css']
})
export class VaccinationComponent implements OnInit {
  vaccinationData: any;
  constructor(private worldwideService: WorldwideCovidService) { }

  ngOnInit() {
    this.worldwideService.worldwideVaccination().subscribe((result) =>{
      this.vaccinationData=result;
    });
  }
}
