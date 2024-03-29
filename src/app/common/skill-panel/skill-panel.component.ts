import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-panel',
  templateUrl: './skill-panel.component.html',
  styleUrl: './skill-panel.component.scss'
})
export class SkillPanelComponent {

  @Input() tech = "";
  @Input() flipped = false;
  @Input() icon = "fa-regular fa-circle-xmark";
  @Input() techStack=['None'];
  @Input() imgStack=['None'];
  @Input() iconStack=['None'];

  onMouseOver(){
    this.flipped=!this.flipped;
  }

  onMouseOut(){
    this.flipped=!this.flipped;
  }

}
