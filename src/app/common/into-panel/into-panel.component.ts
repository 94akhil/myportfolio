import { Component, HostListener } from "@angular/core";

@Component({
  selector: "app-into-panel",
  templateUrl: "./into-panel.component.html",
  styleUrl: "./into-panel.component.scss",
})
export class IntoPanelComponent {
  public windowWidth: number;

  constructor() {
    this.windowWidth = window.innerWidth; // Initialize with the current width
  }

  @HostListener("window:resize", ["$event"])
  onResize(event:any) {
    this.windowWidth = window.innerWidth; // Update width on resize
  }
}
