import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(private el: ElementRef, private renderer: Renderer2) {

  }


  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
    let menuElement = (<HTMLElement>this.el.nativeElement)
      .querySelector('.sticky-row');
    let disappears = menuElement?.querySelectorAll('.scrolled-disappear');
    let menuElementLeft = menuElement?.querySelector('.scrolled-left');
    let multiplier = 0.95;

    if(this.isMobilePhone())
    {
      multiplier = 0.45;
    }

    if (window.scrollY > multiplier * window.innerHeight) {
      this.renderer.addClass(menuElement, 'scrolled');

      if(this.isMobilePhone())
      {
        this.setDisappearsDisplay(disappears, "none");
        this.addAndRemoveClass(menuElementLeft, 'col-12', 'col-4');
        this.renderer.addClass(menuElementLeft, "left-padding");
      }


    } else {
      this.renderer.removeClass(menuElement, 'scrolled');

      if(this.isMobilePhone())
      {
        this.setDisappearsDisplay(disappears, "inline-block");
        this.addAndRemoveClass(menuElementLeft, 'col-4', 'col-12');
        this.renderer.removeClass(menuElementLeft, "left-padding");
      }

    }       
  }
  private addAndRemoveClass(element: Element | null | undefined, addClass: string, removeClass: string)
  {
    this.renderer.removeClass(element, removeClass);
    this.renderer.addClass(element, addClass);
  }  

  private setDisappearsDisplay(disappears: NodeListOf<Element> | undefined, value: string)
  {
    disappears?.forEach(disappear => {
      let element = (<HTMLElement>disappear);
      element.style.display = value;
    });
  }

  private isMobilePhone()
  {
    return window.innerWidth < 768;
  }
}
