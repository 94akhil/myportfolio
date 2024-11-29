import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() img='';
  @Input() techStack=['None']
  @Input() header='';
  @Input() description=''
  @Input() videoId=''
  @Input() github=''

  navigateToURL(url:any){
    window.open(url)
  
  }
 }
