import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { auth } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { User } from './user.model';
import { UserStore } from './user.store';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private user$;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private store: UserStore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>('users/${user.uid}').valueChanges();
        } else {
          return of(null);
        }
      })
    );

  }

  googleSignIn = async () => {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);

    return this.updateUserData(credential.user);
  }

  signOut = async () => {
    this.store.reset();
    await this.afAuth.auth.signOut();
    this.router.navigate(['']);
  }

  private updateUserData = ({ uid, email, displayName, photoURL }: User) => {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);

    const data = {
      uid,
      email,
      displayName,
      photoURL
    };

    this.store.update(data);

    return userRef.set(data, { merge: true });
  }

}
