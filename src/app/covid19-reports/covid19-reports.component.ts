import { Component, OnInit, ViewChild } from '@angular/core';
import { Covid19apiService } from '../covid19api.service';
import { CountryReports } from "src/countryReports";
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-covid19-reports',
  templateUrl: './covid19-reports.component.html',
  styleUrls: ['./covid19-reports.component.css']
})

export class Covid19ReportsComponent implements OnInit {

  ELEMENT_DATA : CountryReports[] = [];

  displayedColumns: string[] = ['flag','country','cases','todayCases','deaths','todayDeaths','recovered','active','critical','casesPerOneMillion','deathsPerOneMillion','tests','testsPerOneMillion'];
  dataSource = new MatTableDataSource<CountryReports>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild(MatSort, {static: true})
  sort!: MatSort;


  constructor(public service: Covid19apiService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllReports();
  }

  public getAllReports() {
    let resp = this.service.covid19Reports();
    resp.subscribe(report => this.dataSource.data = report as CountryReports[]);
  }

  applyFilter(filterValue:string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
