import {Component, HostBinding, OnInit} from '@angular/core';
import {slideInDownAnimation} from '../../../animations';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
    animations: [slideInDownAnimation]
})
export class ProductsComponent implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display')   display = 'block';
  constructor() { }

  ngOnInit() {
  }

}
