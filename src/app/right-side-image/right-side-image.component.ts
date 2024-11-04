import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-right-side-image',
  templateUrl: './right-side-image.component.html',
  styleUrls: ['./right-side-image.component.scss']
})
export class RightSideImageComponent {
  @Input() image: string;
  @Input() title: string;
  @Input() content: string;

  constructor() {
    this.image = "";
    this.title = "";
    this.content = "";
  }
}
