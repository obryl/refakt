import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
@Injectable()
export class AuthService {
  user: any;
  constructor(
      private _firebaseAuth: AngularFireAuth,
      private router: Router) {}

  signInRegular(email, password) {
    const credential = firebase.auth.EmailAuthProvider.credential( email, password );
    return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password);
  }
}
