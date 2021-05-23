import { Component, Input, OnInit } from '@angular/core';
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
  @Input() deviceXs: boolean;
  globalData: any;
  summaryReport: any;

  displayData: any;

  selectedCountry!: string;
  selectedState!: string;

  states: any;
  indiaData: any;

  constructor(private worldwideService: WorldwideCovidService, public covidAPIService: Covid19apiService, public covid19India: Covid19apiService) { }

  ngOnInit() {
    this.worldwideService.worldwideReports().subscribe((result) => {
      this.globalData = result;
      this.displayData = result;
    });

    this.selectedCountry="Global";

    this.covidAPIService.covid19Reports().subscribe((summary) => {
      this.summaryReport = summary;
    });

    this.covid19India.covid19IndiaData().subscribe((result) => {
      this.indiaData = result;
      this.states = Object.keys(this.indiaData.state_wise);
    });

    this.selectedState = "Select an option";
  }
  // Donut
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

  //India states
  public onStateSelected() { /*
    console.log(this.summaryReport.country);*/
    if(this.selectedState == 'Select an option'){
    }
    for (let i=0; i<this.states.length; i++) {
      console.log()
      console.log(this.selectedState == Object.keys(this.indiaData.state_wise)[i]);
      
      if(this.selectedState == Object.keys(this.indiaData.state_wise)[i]){
        console.log(this.indiaData.state_wise[this.selectedState]);

        this.displayData = this.indiaData.state_wise[this.selectedState];
        console.log(this.displayData);
      }
    }
  }
}
