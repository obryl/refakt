import {Injectable} from '@angular/core';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable()
export class AuthService {
  user: any;
  constructor(
      private _firebaseAuth: AngularFireAuth) {}

  signInRegular(email, password) {
    // const credential = firebase.auth.EmailAuthProvider.credential( email, password );
    return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password);
  }
}
