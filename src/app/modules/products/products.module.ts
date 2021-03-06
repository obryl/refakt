import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsComponent} from './container/products.component';
import {ProductsRoutingModule} from './products-routing.module';
import {ProductDetailsComponent} from './components/product-details/product-details.component';
import {Title} from '@angular/platform-browser';
import {GalleryModule} from '@ks89/angular-modal-gallery';

@NgModule({
  imports: [
    CommonModule,
    GalleryModule,
    ProductsRoutingModule
  ],
  declarations: [ProductsComponent, ProductDetailsComponent],
  providers: [Title]
})
export class ProductsModule {
}
