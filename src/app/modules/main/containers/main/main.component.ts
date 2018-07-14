import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    constructor(private db: AngularFireDatabase) {
    }

    coursesObservable: Observable<string[]>;

    ngOnInit() {
        this.coursesObservable = this.db.list('/products').valueChanges();
        this.coursesObservable.subscribe(data => console.log(data));
    }

    addProduct() {
        this.db.list('/products').push({title: 'Second Product', description: 'You should definitely buy it!'});
    }
    showProducts() {
        this.db.list('/products').remove();
    }
}
