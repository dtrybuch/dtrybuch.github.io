import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('allMenuAnimation', [
      state('small', style({
        height: '50px',
        backgroundColor: 'rgba(228, 228, 228, 0.884)'
      })),
      state('big', style({
        height: '100px',
      })),
      state('mobile', style({
        height: '150px',
      })),
      transition('small <=> big', [
        animate('0ms ease-in-out')
      ])
    ]),
    trigger('menuAnimation', [
      state('small', style({
        padding: '10px'
      })),
      state('big', style({
        padding: '30px',
      })),
      transition('small <=> big', [
        animate('0ms ease-in-out')
      ])
    ])
  ]
})
export class MenuComponent {
  constructor(private el: ElementRef, private renderer: Renderer2) {

  }
  allMenuState: 'small' | 'big' | 'mobile' = this.isMobilePhone() ? 'mobile' : 'big';;
  menuState: 'small' | 'big' = this.isMobilePhone() ? 'small' : 'big';;
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
    let menuElement = (<HTMLElement>this.el.nativeElement)
      .querySelector('.sticky-row');
    let disappears = menuElement?.querySelectorAll('.scrolled-disappear');
    let menuElementLeft = menuElement?.querySelector('.scrolled-left');
    let multiplier = 0.95;

    if (this.isMobilePhone()) {
      multiplier = 0.45;
    }

    if (window.scrollY > multiplier * window.innerHeight) {
      this.allMenuState = 'small';
      this.menuState = 'small';
      if (this.isMobilePhone()) {
        this.setDisappearsDisplay(disappears, "none");
        this.addAndRemoveClass(menuElementLeft, 'col-12', 'col-4');
        this.renderer.addClass(menuElementLeft, "left-padding");
      }


    } else {

      if (this.isMobilePhone()) {
        this.allMenuState = 'mobile';
        this.menuState = 'small';
        this.setDisappearsDisplay(disappears, "inline-block");
        this.addAndRemoveClass(menuElementLeft, 'col-4', 'col-12');
        this.renderer.removeClass(menuElementLeft, "left-padding");
      } else {
        this.allMenuState = 'big';
        this.menuState = 'big';
      }

    }
  }
  private addAndRemoveClass(element: Element | null | undefined, addClass: string, removeClass: string) {
    this.renderer.removeClass(element, removeClass);
    this.renderer.addClass(element, addClass);
  }

  private setDisappearsDisplay(disappears: NodeListOf<Element> | undefined, value: string) {
    disappears?.forEach(disappear => {
      let element = (<HTMLElement>disappear);
      element.style.display = value;
    });
  }

  private isMobilePhone() {
    return window.innerWidth < 768;
  }
}
