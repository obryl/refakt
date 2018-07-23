import {Component, ElementRef, HostBinding, OnInit, ViewChild} from '@angular/core';
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
    @HostBinding('style.display') display = 'block';
@ViewChild('ol') el: ElementRef;
    constructor(public config: NgbCarouselConfig) {

    }

    ngOnInit() {
console.log(this.el);
    }

}
