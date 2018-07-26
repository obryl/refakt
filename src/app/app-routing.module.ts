import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './modules/main/containers/homepage/homepage.component';
import {DeliveryComponent} from './modules/main/containers/delivery/delivery.component';
import {ContactsComponent} from './modules/main/containers/contacts/contacts.component';

const routes: Routes = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomepageComponent,
        children: []
    },
    {
        path: 'delivery',
        component: DeliveryComponent,
        children: []
    },
    {
        path: 'contacts',
        component: ContactsComponent,
        children: []
    },
    {
        path: 'products',
        loadChildren: 'app/modules/products/products.module#ProductsModule'

    },
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
