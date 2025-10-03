import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('allMenuAnimation', [
      state('small', style({
        height: '70px',
        backgroundColor: 'rgba(228, 228, 228, 0.950)'
      })),
      state('big', style({
        height: '100px',
      })),
      state('mobile-closed', style({
        height: '60px',
        backgroundColor: 'rgba(228, 228, 228, 0.950)'
      })),
      state('mobile-opened', style({
        height: '332px',
        backgroundColor: 'rgba(228, 228, 228, 0.950)'
      })),
      transition('small <=> big', [
        animate('0ms ease-in-out')
      ])
    ]),
    trigger('menuAnimation', [
      state('mobile', style({
        padding: '18px'
      })),
      state('small', style({
        padding: '22px'
      })),
      state('big', style({
        padding: '37px',
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
  mobileMenuOpen = false;
  allMenuState: 'small' | 'big' | 'mobile-opened' | 'mobile-closed' = this.isMobilePhone() ? 'mobile-closed' : 'big';;
  menuState: 'small' | 'big' | 'mobile' = this.isMobilePhone() ? 'mobile' : 'big';;

  toggleMobileMenu() {
    if(!this.isMobilePhone()) {
      return;
    }
    this.mobileMenuOpen = !this.mobileMenuOpen;
    this.allMenuState = this.mobileMenuOpen ? 'mobile-opened' : 'mobile-closed';
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
    let multiplier = 0.95;

    if (this.isMobilePhone()) {
      this.menuState = 'mobile';
      this.allMenuState = this.mobileMenuOpen ? 'mobile-opened' : 'mobile-closed';
    } else {
      if (window.scrollY > multiplier * window.innerHeight) {
        this.allMenuState = 'small';
        this.menuState = 'small';
      }
      else {
        this.menuState = 'big';
        this.allMenuState = 'big';
      }
    }
  }

  public isMobilePhone() {
    return window.innerWidth < 768;
  }
}
