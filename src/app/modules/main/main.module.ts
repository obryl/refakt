import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './containers/main/main.component';
import {HeaderComponent} from './components/header/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MainRoutingModule} from './main-routing.module';

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        MainRoutingModule
    ],
    declarations: [MainComponent, HeaderComponent],
    exports: [
        HeaderComponent
    ]
})
export class MainModule {
}
