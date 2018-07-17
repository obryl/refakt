import {Component, HostBinding, OnInit} from '@angular/core';

import {slideInDownAnimation} from '../../../../animations';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss'],
    animations: [slideInDownAnimation]
})
export class HomepageComponent implements OnInit {

    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display')   display = 'block';

    constructor() {
    }

    ngOnInit() {
    }

}
