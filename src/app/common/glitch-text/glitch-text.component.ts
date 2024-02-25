import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-glitch-text',
  templateUrl: './glitch-text.component.html',
  styleUrl: './glitch-text.component.css'
})
export class GlitchTextComponent {
  @Input() content=""
}
