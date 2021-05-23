import { Component, Input, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chart.js';
import { WorldwideCovidService } from "../worldwide-covid.service";
import { Covid19apiService } from "../covid19api.service";

@Component({
  selector: 'app-vaccination',
  templateUrl: './vaccination.component.html',
  styleUrls: ['./vaccination.component.css']
})
export class VaccinationComponent implements OnInit {

  @Input() deviceXs: boolean;
  selectedCountry: any = "Global"; 
  vaccinationData: any;
  indiaVaccinationData: any;
  indianPopulation: number = 1390885000;
  constructor(private worldwideService: WorldwideCovidService, public indiaVaccinationService: Covid19apiService) { }

  ngOnInit() {
    this.worldwideService.worldwideVaccination().subscribe((result) =>{
      this.vaccinationData=result;
    });

    this.indiaVaccinationService.covid19IndiaVaccinationData().subscribe((indiaResult) => {
      this.indiaVaccinationData = indiaResult;
    });
  }

  onVaccinationCountrySelected() {
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
  public pieChartLabels: Label[] = ['Non-Vaccinated Population', 'Fully Vaccinated Population', 'Partially Vaccinated Population'];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.6)', 'rgba(0,255,0,0.6)', 'rgba(0,0,255,0.6)'],
    },
  ];

  

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  // Donut
  public donutChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    rotation: 1* Math.PI,
    circumference: 1* Math.PI,
    plugins: {
      datalabels: {
        formatter: (value: any, ctx: { chart: { data: { labels: { [x: string]: any; }; }; }; dataIndex: string | number; }) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public donutChartLabels: Label[] = ['Covishield', 'Covaxin', 'Sputnik'];
  public donutChartData: any[] = [];
  public donutChartType: ChartType = 'doughnut';
  public donutChartLegend = true;
  public donutChartPlugins = [pluginDataLabels];
  public donutChartColors = [
    {
      backgroundColor: ['rgba(0,0,255,0.6)', 'rgba(0,255,0,0.6)', 'rgba(255,0,0,0.6)'],
    },
  ];

  public pieChartGenderLabels: Label[] = ['Male', 'Female', 'Others'];
  public pieChartGenderColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,0,255,0.3)', 'rgba(0,255,0,0.3)'],
    },
  ];
  public pieChartGenderType: ChartType = 'doughnut';

  public pieChartAgeLabels: Label[] = ['18-45', '45-60', 'Above 60'];

  public pieChartAgeType: ChartType = 'pie';
}
