import { Component, OnInit } from '@angular/core';
import { WorldwideCovidService } from "../worldwide-covid.service";

@Component({
  selector: 'app-vaccination',
  templateUrl: './vaccination.component.html',
  styleUrls: ['./vaccination.component.css']
})
export class VaccinationComponent implements OnInit {
  data: any;
  constructor(private worldwideService: WorldwideCovidService) { }

  ngOnInit() {
    this.worldwideService.worldwideReports().subscribe((result) =>{
      this.data=result;
    });
  }
}
