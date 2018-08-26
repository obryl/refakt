import {AngularFireDatabase} from 'angularfire2/database';
import {Component, HostBinding, OnInit} from '@angular/core';
import {slideInDownAnimation} from '../../../animations';
import {map} from 'rxjs/operators';
import {ProductsService} from '../services/products.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
    animations: [slideInDownAnimation]
})
export class ProductsComponent implements OnInit {

    categories: any[] = [];

    constructor(
      private productsService: ProductsService
    ) {
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
