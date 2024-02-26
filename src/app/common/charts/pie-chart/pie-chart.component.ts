import { Component, PLATFORM_ID,Inject, ElementRef, ViewChild  } from "@angular/core";
import {  ChartData, ChartEvent, ChartType,ChartOptions } from "chart.js";
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: "app-pie-chart",
  templateUrl: "./pie-chart.component.html",
  styleUrl: "./pie-chart.component.scss",
})
export class PieChartComponent {
  [x: string]: any;
  
  public pieChartColors: string[] = ['#fdba41','white'];

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
          size: 18,
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
      backgroundColor: ['rgb(39 55 68)', '#bd7a02'],
      hoverBackgroundColor: ['#334b5e','rgb(255 165 0)' ]
    }]
  };

  public pieChartType: ChartType = 'pie';

  isBrowser: boolean;

  @ViewChild('pieSection')
  pieSection!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  get sectionElement(): ElementRef {
    return this.pieSection;
  }
  
 }
