import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs/internal/Subject';
import {ProductsService} from '../../services/products.service';
import {Title} from '@angular/platform-browser';
import {GridLayout, Image, PlainGalleryConfig, PlainGalleryStrategy} from '@ks89/angular-modal-gallery';

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
  urls;
  images: Image[] = [];
  layout = new GridLayout({width: 'auto', height: '200px'}, {
    length: 20,
    wrap: true
  });

  carouselPreview: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.GRID,
    layout: this.layout
  };


  constructor(private route: ActivatedRoute, private productsService: ProductsService, private title: Title
  ) {
  }

  setSliderImages(urls
                    :
                    Array<string>
  ) {
    let i = 0;
    urls.forEach(url => {
      this.images.push(new Image(
        i,
        { // modal
          img: url
        }
      ));
      i++;
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productsService.getItem(params['productId']).subscribe((productDetails) => {
        this.productDetails = productDetails;
        this.products = productDetails.products || {};
  this.title.setTitle(`ПП "Рефакт" м.Івано-Франківськ | ${productDetails.title}`);
        if (productDetails.id === 'poruchni') {
          this.setSliderImages(productDetails.products);

        }
      });
    });
  }

  ngOnDestroy()
    :
    void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
