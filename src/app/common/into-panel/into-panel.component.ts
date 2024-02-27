import { Component, HostListener,Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: "app-into-panel",
  templateUrl: "./into-panel.component.html",
  styleUrl: "./into-panel.component.scss",
})
export class IntoPanelComponent {
  public windowWidth!: number;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)){
      this.windowWidth = window.innerWidth; 
    }
    
  }

  @HostListener("window:resize", ["$event"])
  onResize(event:any) {
    this.windowWidth = window.innerWidth; 
  }
}
