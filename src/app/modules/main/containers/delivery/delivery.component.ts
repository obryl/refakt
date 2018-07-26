import {Component, HostBinding, OnInit} from '@angular/core';

import {slideInDownAnimation} from '../../../../animations';
import {FirebaseService} from '../../../../core/services/firebase.service';

@Component({
    selector: 'app-delivery',
    templateUrl: './delivery.component.html',
    styleUrls: ['./delivery.component.scss'],
    animations: [slideInDownAnimation]
})
export class DeliveryComponent implements OnInit {

    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display') display = 'block';

    constructor(public fbservice: FirebaseService) {
    }

    ngOnInit() {
    }

}
