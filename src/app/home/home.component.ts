import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit,OnDestroy{
 
  constructor(private router:Router){

  }
  showRain = false;
  binaryColumns: string[][] = [];
  numberOfColumns = 40; // Adjust based on your design
  columnHeight = 100; // Number of digits per column
  updateInterval = 300; // Interval in milliseconds to add new digits
  private updateIntervalId?: any;

  ngOnInit() {
    this.initializeColumns();
  }

  ngOnDestroy() {
    this.stopRain();
  }


  goToView(mode:String){
    this.router.navigate([mode]);
  }

  onMouseEnter(mode:string) {
    this.startRain();
  }

  onMouseLeave(mode:string) {
    this.stopRain();
  }

 
  initializeColumns() {
    this.binaryColumns = Array.from({ length: this.numberOfColumns }, () =>
      Array.from({ length: this.columnHeight }, () => Math.floor(Math.random() * 2).toString())
    );
  }

  startRain() {
    this.showRain = true;
    // Check if 'window' is defined to avoid errors in non-browser environments
    if (typeof window !== 'undefined' && !this.updateIntervalId) {
      this.updateIntervalId = setInterval(() => {
        this.addNewDigits();
      }, this.updateInterval);
    }
  }

  stopRain() {
    this.showRain = false;
    // Ensure 'window' is available before trying to clear the interval
    if (typeof window !== 'undefined' && this.updateIntervalId) {
      clearInterval(this.updateIntervalId);
      this.updateIntervalId = undefined;
    }
  }

  addNewDigits() {
    this.binaryColumns = this.binaryColumns.map(column => 
      [Math.floor(Math.random() * 2).toString(), ...column.slice(0, this.columnHeight - 1)]
    );
  }  

}
