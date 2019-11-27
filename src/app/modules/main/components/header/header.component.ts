import {animate, state, style, transition, trigger} from '@angular/animations';
import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('collapse', [
      state('open', style({
        opacity: '1'
      })),
      state('closed', style({
        opacity: '0',
        display: 'none',
      })),
      transition('closed => open', animate('400ms ease-in')),
      transition('open => closed', animate('400ms ease-out'))
    ])
  ]
})
export class HeaderComponent implements OnInit {
  isNavbarCollapsed = true;
  smallHeader: boolean;
  smallHeaderMobile: boolean;
  navbar;

  constructor() {
  }

  ngOnInit() {
    this.onResize(window);
  }

  @HostListener('window:resize', ['$event.target'])
  onResize(event) {
    if (event.innerWidth > 575) {
      this.smallHeaderMobile = false;
      this.isNavbarCollapsed = true;
    } else {
      this.smallHeaderMobile = true;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.smallHeader = window.pageYOffset > 80 && window.innerWidth > 576;
  }

  closeNavbar(event) {
    if (!this.isNavbarCollapsed && !event.target.className.includes('burger')) {
      this.isNavbarCollapsed = true;
    }
  }

  toggleNavbar(): void {
    // alert(this.isNavbarCollapsed);
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
}
