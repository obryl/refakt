import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs/internal/Subject';
import {ProductsService} from '../../services/products.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  productDetails: any;
  products;
  keys = Object.keys;
  activeTab = 0;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private title: Title
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productsService.getItem(params['productId']).subscribe((productDetails) => {
        this.productDetails = productDetails;
        this.products = productDetails.products || {};
        this.title.setTitle(`ПП "Рефакт" м.Івано-Франківськ | ${productDetails.title}`);
      });
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
