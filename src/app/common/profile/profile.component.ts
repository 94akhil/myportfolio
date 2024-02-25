import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  @Input() hover=false;

  onMouseOver(){
    this.hover=!this.hover;
  }

  onMouseOut(){
    this.hover=!this.hover;
  }

}
