import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full'

    },
    {
        path: 'home',
        loadChildren: 'app/modules/homepage/homepage.module#HomepageModule'

    },
    {
        path: 'main',
        loadChildren: 'app/modules/main/main.module#MainModule'

    },
    {
        path: 'about',
        loadChildren: 'app/modules/about/about.module#AboutModule'

    },
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
