import {Component, HostBinding, OnInit} from '@angular/core';
import {slideInDownAnimation} from '../../../animations';
import {ProductsService} from '../services/products.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [slideInDownAnimation]
})
export class ProductsComponent implements OnInit {

  categories: any[] = [];

  constructor(private productsService: ProductsService, private title: Title) {
    this.title.setTitle( 'ПП"Рефакт" | Продукція' );
  }

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';


  ngOnInit() {
    this.productsService.getList()
      .subscribe((categories) => {
        this.categories = categories;
      });
  }

}
