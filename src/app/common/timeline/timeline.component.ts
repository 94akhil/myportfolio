import { Component, Input } from '@angular/core';

export interface EventItem {
  title?: string;
  companyName?: string;
  icon?: string;
  color?: string;
  image?: string;
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  events: EventItem[];
  @Input() data!: EventItem[];
  @Input() align ='left';

  constructor() {
      this.events = this.data;
  }

  ngOnChanges(){
    this.events = this.data;
  }
}
