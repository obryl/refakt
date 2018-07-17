import {Component, HostBinding, OnInit} from '@angular/core';
import {slideInDownAnimation} from './animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [slideInDownAnimation]
})
export class AppComponent implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;
    constructor() {
    }

    ngOnInit() {
    }


}
