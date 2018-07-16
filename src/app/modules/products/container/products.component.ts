import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  categories: any[] = [];

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.db.list('/categories').valueChanges().subscribe((categories) => {
      this.categories = categories;
    });
  }

}
