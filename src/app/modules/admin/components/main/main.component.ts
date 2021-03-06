import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../../products/services/products.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  categories: any[] = [];

  constructor(
    private productsService: ProductsService
  ) {
  }


  ngOnInit() {
    this.productsService.getList()
      .subscribe((categories) => {
        this.categories = categories;
      });
  }

}
