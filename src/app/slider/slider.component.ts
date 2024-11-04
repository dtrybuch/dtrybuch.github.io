import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss', '../app.component.scss']
})
export class SliderComponent {
  @Input() 
  centerName: string;

  constructor() {
    this.centerName = "";
  }
}
