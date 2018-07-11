import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomepageComponent} from './homepage/homepage.component';

const routes: Routes = [
    {
        path: '',
        component: HomepageComponent,
        children: []
    },
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    providers: [],
    exports: [RouterModule]
})
export class HomepageRoutingModule {
}
