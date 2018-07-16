import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsComponent} from './container/products.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ProductsRoutingModule} from './products-routing.module';

@NgModule({
    imports: [
      CommonModule,
      NgbModule,
      ProductsRoutingModule
    ],
    declarations: [ProductsComponent]
})
export class ProductsModule {
}
