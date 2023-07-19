import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss', '../app.component.scss']
})
export class MenuComponent {
  constructor(private el: ElementRef, private renderer: Renderer2){

  }


  @HostListener('window:scroll', ['$event']) // for window scroll events
    onScroll() {
      let menuElement = (<HTMLElement>this.el.nativeElement)
        .querySelector('.sticky-row');
      if(window.scrollY > 0.95 * window.innerHeight)
      {
        this.renderer.addClass(menuElement, 'scrolled');
      } else{
        this.renderer.removeClass(menuElement, 'scrolled');
      }
    }
}
