import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private db: AngularFireDatabase) { }

  getList() {
    return this.db.list('/categories').snapshotChanges().pipe(map((categories) => {
      return categories.map(category => {
        const data = category.payload.val();
        const id = category.key;
        return { id, ...data };
      });
    }));
  }

  getItem(itemId: string) {
    return this.db.object(`/categories/${itemId}`).snapshotChanges().pipe(map((category) => {
      const data = category.payload.val() as any;
      const id = category.key;
      if (data.products) {
        data.products = Object.values(data.products);
      }
      return { id, ...data };
    }));
  }

  addProductToCategory(itemId: string, product) {
    return this.db.list(`/categories/${itemId}/products`).push(product);
  }
}
