import {Component, HostBinding, HostListener, OnInit} from '@angular/core';
import {slideInDownAnimation} from '../../../../animations';
import {FirebaseService} from '../../../../core/services/firebase.service';
import {AngularFireAction, DatabaseSnapshot} from 'angularfire2/database';
import {Observable} from 'rxjs';


@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss'],
    animations: [slideInDownAnimation],
    providers: [FirebaseService]
})
export class HomepageComponent implements OnInit {
    categories: Observable<AngularFireAction<DatabaseSnapshot<{}>>[]> = this.fbservice.getItems();
    correctWidth: boolean;

    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display') display = 'block';

    @HostListener('window:resize') onResize() {
        this.correctWidth = window.innerWidth < 786;
    }

    constructor(public fbservice: FirebaseService) {
    }

    ngOnInit() {
    }
}

