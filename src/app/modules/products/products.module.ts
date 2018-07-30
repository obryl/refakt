import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsComponent} from './container/products.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ProductsRoutingModule} from './products-routing.module';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

@NgModule({
    imports: [
      CommonModule,
      NgbModule,
      ProductsRoutingModule
    ],
    declarations: [ProductsComponent, ProductDetailsComponent]
})
export class ProductsModule {
}
