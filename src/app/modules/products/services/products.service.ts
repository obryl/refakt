import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {AngularFireStorage} from '@angular/fire/storage';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) {
  }

  getList() {
    return this.db.list('/categories').snapshotChanges().pipe(map((categories) => {
      return categories.map(category => {
        const data = category.payload.val();
        const id = category.key;
        return {id, ...data};
      });
    }));
  }

  getItem(itemId: string) {
    return this.db.object(`/categories/${itemId}`).snapshotChanges().pipe(
      map((category) => {
          const data = category.payload.val() as any;
          const id = category.key;
        if (itemId !== 'poruchni') {
          return {id, ...data};
        } else {
          return {id, ...data};
        }
      }));
  }

  addProductToCategory(itemId: string, product) {
    return this.db.list(`/categories/${itemId}/products`).push(product);
  }

  updateProducts(itemId: string, product) {
    return this.db.list(`/categories/${itemId}`).set(`products`, product);
  }

  uploadPicture(file: File) {
    return this.storage.ref(`categories/handrails/${file.name}`).put(file);
  }

  getHandrailsImages() {
    this.storage.ref('categories').child('handrails/IMG_9140.JPG').getDownloadURL().subscribe(data => console.log(data));
  }
}
