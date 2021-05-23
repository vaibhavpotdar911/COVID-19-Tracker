import { Component, Input, OnInit } from '@angular/core';
import { WorldwideCovidService } from "../worldwide-covid.service";


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  @Input() deviceXs: boolean;
  data: any;
  constructor(private worldwideService: WorldwideCovidService) { }

  ngOnInit() {
    this.worldwideService.worldwideReports().subscribe((result) =>{
      this.data=result;
    });
  }

}
