import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  coursesObservable;

  constructor(private db: AngularFireDatabase) { }
  ngOnInit() {
    this.coursesObservable = this.db.list('/products').valueChanges();
  }

  addProduct() {
    this.db.list('/products').push({title: 'First Product', description: 'You should definitely buy it!'});
  }
}
