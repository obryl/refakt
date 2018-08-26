import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {AdminGuard} from './guards/admin.guard';
import {MainComponent} from './components/main/main.component';



const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        children: []
    },
    {
        path: '',
        component: MainComponent,
        children: [],
        canActivate: [AdminGuard]
    },
    {path: '**', redirectTo: 'login'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    providers: [AdminGuard],
    exports: [RouterModule]
})
export class AdminRoutingModule {
}
