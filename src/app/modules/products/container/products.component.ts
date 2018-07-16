import {AngularFireDatabase} from 'angularfire2/database';
import {Component, HostBinding, OnInit} from '@angular/core';
import {slideInDownAnimation} from '../../../animations';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
    animations: [slideInDownAnimation]
})
export class ProductsComponent implements OnInit {

    categories: any[] = [];

    constructor(private db: AngularFireDatabase) {
    }

    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display') display = 'block';


    ngOnInit() {
        this.db.list('/categories').valueChanges().subscribe((categories) => {
            this.categories = categories;
        });
    }

}
