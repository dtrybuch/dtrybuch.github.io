import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-left-side-image',
  templateUrl: './left-side-image.component.html',
  styleUrls: ['./left-side-image.component.scss']
})
export class LeftSideImageComponent {
  @Input() image: string;
  @Input() title: string;

  constructor() {
    this.image = "";
    this.title = "";
  }
}
