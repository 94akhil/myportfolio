import { Component, PLATFORM_ID,Inject } from "@angular/core";
import {  ChartData, ChartEvent, ChartType,ChartOptions } from "chart.js";
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: "app-pie-chart",
  templateUrl: "./pie-chart.component.html",
  styleUrl: "./pie-chart.component.css",
})
export class PieChartComponent {
  
  public pieChartColors: string[] = ['#fdba41','#334b5e'];

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip:{
        enabled:false
      },
      datalabels: {
        color: (context) => {
          return this.pieChartColors[context.dataIndex];
        },
        anchor: 'center',
        align: 'center',
        font: {
          size: 20,
          weight: 'bold'
        },
        formatter: (value, context) => {
          return context.chart?.data?.labels?.[context.dataIndex] ?? '' + `: ${value}`;
        }
        
      }
    }
  };

  public pieChartLabels: string[] = ['Backend', 'Frontend'];
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: this.pieChartLabels,
    datasets: [{
      data: [45, 55],
      backgroundColor: ['rgb(39 55 68)', 'rgb(255 165 0)'],
      hoverBackgroundColor: ['#334b5e','#fdba41' ]
    }]
  };

  public pieChartType: ChartType = 'pie';

  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  
 }
