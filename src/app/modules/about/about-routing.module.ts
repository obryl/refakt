import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AboutComponent} from './about/about.component';

const routes: Routes = [
    {
        path: '',
        component: AboutComponent,
        children: []
    },
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    providers: [],
    exports: [RouterModule]
})
export class AboutRoutingModule {
}
