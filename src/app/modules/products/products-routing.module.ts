import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ProductsComponent} from './container/products.component';
import {ProductDetailsComponent} from './components/product-details/product-details.component';

const routes: Routes = [
    {
        path: '',
        component: ProductsComponent,
        children: []
    },
    {
        path: ':productId',
        component: ProductDetailsComponent,
        children: []
    },
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    providers: [],
    exports: [RouterModule]
})
export class ProductsRoutingModule {
}
