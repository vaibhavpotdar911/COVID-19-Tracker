import { Component, OnInit } from '@angular/core';
import { WorldwideCovidService } from "../worldwide-covid.service";
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chart.js';
import { Covid19apiService } from '../covid19api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  globalData: any;
  summaryReport: any;

  displayData: any;

  selectedCountry!: string;
  constructor(private worldwideService: WorldwideCovidService, public covidAPIService: Covid19apiService) { }

  ngOnInit() {
    this.worldwideService.worldwideReports().subscribe((result) => {
      this.globalData = result;
      this.displayData = result;
    });

    this.selectedCountry="Global";

    this.covidAPIService.covid19Reports().subscribe((summary) => {
      this.summaryReport = summary;
    });
  }
  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value: any, ctx: { chart: { data: { labels: { [x: string]: any; }; }; }; dataIndex: string | number; }) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = ['Active Cases', 'Recovered Cases', 'Total Deaths'];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'doughnut';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(0,0,255,0.6)', 'rgba(0,255,0,0.6)', 'rgba(255,0,0,0.6)'],
    },
  ];



  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  //update dashboard
  public onCountrySelected() { /*
    console.log(this.selectedCountry);
    console.log(this.summaryReport.country);*/
    if(this.selectedCountry == 'Global'){
      this.displayData = this.globalData;
    }
    for (let summary of this.summaryReport) {
      if(this.selectedCountry == summary.country){
        this.displayData = summary;
        /*console.log(this.displayData);*/
      }
    }
  }
}
