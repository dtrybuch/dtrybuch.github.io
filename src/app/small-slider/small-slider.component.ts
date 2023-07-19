import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-slider',
  templateUrl: './small-slider.component.html',
  styleUrls: ['./small-slider.component.scss', '../slider/slider.component.scss']
})
export class SmallSliderComponent {
  @Input() 
  centerName: string;

  /**
   *
   */
  constructor() {
    this.centerName = "";
  }
  
}
