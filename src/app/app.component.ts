import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lake-house';

  constructor(private el: ElementRef, private renderer: Renderer2) {

  }

  scroll() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
    let scrollup = (<HTMLElement>this.el.nativeElement)
      .querySelector('.scrollup');
    if(window.scrollY > 0.85 * window.innerHeight)
    {
      this.renderer.addClass(scrollup, 'scrollup-visible');
    } else {
      this.renderer.removeClass(scrollup, 'scrollup-visible');
    }
  }
}
