import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chart.js';
import { WorldwideCovidService } from '../worldwide-covid.service';

@Component({
  selector: 'app-vaccination-reports',
  templateUrl: './vaccination-reports.component.html',
  styleUrls: ['./vaccination-reports.component.css']
})

export class VaccinationReportsComponent implements OnInit {

  constructor(public worldwideService: WorldwideCovidService) { }
  vaccinationData: any;
  ngOnInit() {
    this.getVaccinationUpdate();
  }

  public getVaccinationUpdate() {
    let resp2 = this.worldwideService.worldwideVaccination().subscribe((result) =>{
      this.vaccinationData=result;
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
  
}