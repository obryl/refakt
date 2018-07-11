import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutComponent} from './about/about.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AboutRoutingModule} from './about-routing.module';

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        AboutRoutingModule
    ],
    declarations: [AboutComponent]
})
export class AboutModule {
}
