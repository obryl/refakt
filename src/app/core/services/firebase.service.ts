import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireStorage} from '@angular/fire/storage';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
    itemsRef: AngularFireList<any>;
    items: Observable<any[]>;
    mapInit = false;
    constructor(private db: AngularFireDatabase, private fbstorage: AngularFireStorage) {
    }



    makeid() {
        let text = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 8; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }

    uploadFile(event, path = '/categories/') {
        const file = event.target.files[0];
        console.dir(event.target);
        const filePath = `${path}${this.makeid()}${event.target.files[0].name}`;
        const ref = this.fbstorage.ref(filePath);
        const task = ref.put(file).then(() => ref.getDownloadURL().subscribe(
            url => this.updateItem('-LIG-m3bs1kJ4iw9P8w5', {imgUrl: url}, '/categories')
            )
        );
    }
    getItems(path = '/categories') {
        return this.db.list(path).snapshotChanges();
    }

    addItem(data: {}, path = '/categories') {
        this.db.list(path).push(data);
    }

    updateItem(key: string, data: {}, path = '/categories') {
        this.db.list(path).update(key, data);
    }

    deleteItem(key: string, path = '/categories') {
        this.db.list(path).remove(key);
    }

    deleteEverything(path = '/categories') {
        this.db.list(path).remove();
    }
}
