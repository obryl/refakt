import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ProductsComponent} from './container/products.component';

const routes: Routes = [
    {
        path: '',
        component: ProductsComponent,
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
