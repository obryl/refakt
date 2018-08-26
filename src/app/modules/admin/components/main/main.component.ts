import {Component, HostBinding, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  categories: any[] = [];

  constructor(private db: AngularFireDatabase) {
  }


  ngOnInit() {
    this.db.list('/categories').valueChanges().subscribe((categories) => {
      this.categories = categories;
    });
  }

}
