import {Component, HostBinding, OnInit} from '@angular/core';

import {slideInDownAnimation} from '../../../../animations';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss'],
    animations: [slideInDownAnimation],
    providers: [NgbCarouselConfig]
})
export class HomepageComponent implements OnInit {

    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display')   display = 'block';

    constructor(public config: NgbCarouselConfig) {

    }

    ngOnInit() {
    }

}
