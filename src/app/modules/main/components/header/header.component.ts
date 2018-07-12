import {trigger, state, style, animate, transition} from '@angular/animations';
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
      transition('open => closed', animate('100ms ease-out'))
    ])
  ]
})
export class HeaderComponent implements OnInit {
  isNavbarCollapsed = true;
  _isNavbarCollapsedAnim = 'closed';

constructor () {}

  get isNavbarCollapsedAnim(): string {
    return this._isNavbarCollapsedAnim;
  }

  ngOnInit() {
    this.onResize(window);
  }

  @HostListener('window:resize', ['$event.target'])
  onResize(event) {
  console.log(event.innerWidth);
    if (event.innerWidth > 576) {
      this._isNavbarCollapsedAnim = 'open';
      this.isNavbarCollapsed = true;
    } else {
      // comment this line if you don't want to collapse the navbar when window is resized.
      // this._isNavbarCollapsedAnim = 'closed';
    }
  }

  toggleNavbar(): void {
    if (this.isNavbarCollapsed) {
      this._isNavbarCollapsedAnim = 'open';
      this.isNavbarCollapsed = false;
    } else {
      this._isNavbarCollapsedAnim = 'closed';
      this.isNavbarCollapsed = true;
    }
  }
}
