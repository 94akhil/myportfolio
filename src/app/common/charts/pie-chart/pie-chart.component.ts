import { Component, PLATFORM_ID,Inject } from "@angular/core";
import {  ChartData, ChartEvent, ChartType } from "chart.js";
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: "app-pie-chart",
  templateUrl: "./pie-chart.component.html",
  styleUrl: "./pie-chart.component.css",
})
export class PieChartComponent {
  
  public pieChartOptions = {
    responsive: true,
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
