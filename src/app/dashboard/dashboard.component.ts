import { Component, OnInit } from '@angular/core';
import { WorldwideCovidService } from "../worldwide-covid.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: any;
  constructor(private worldwideService: WorldwideCovidService) { }

  ngOnInit() {
    this.worldwideService.worldwideReports().subscribe((result) =>{
      this.data=result;
    });
  }

}
