import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { } from 'rxjs';
import { take, tap } from 'rxjs/operators';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { auth } from 'firebase';

import produce from "immer";

import { Campaign } from '@robocaller';

import { Auth } from './auth.model';
import { AuthStore } from './auth.store'
import { AuthQuery } from './auth.query';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private store: AuthStore,
    private authQuery: AuthQuery,
    private router: Router
  ) { }


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

  private updateUserData = ({ uid, email, displayName, photoURL }: Auth) => {
    const userRef: AngularFirestoreDocument<Auth> = this.afs.doc(`users/${uid}`);

    const data = {
      uid,
      email,
      displayName,
      photoURL
    };

    this.store.update(data);

    return userRef.set(data, { merge: true });
  }


  toggleCampaign = (campaign: Campaign) => {
    return this.authQuery.user$.pipe(
      take(1),
      tap(user => {
        this.store.update(
          produce(user, draft => {
            const campaignIndex = draft.campaigns.findIndex((storedCampaigns) => storedCampaigns.id === campaign.id);
            if (campaignIndex !== -1) {
              draft.campaigns[campaignIndex].scheduled = !draft.campaigns[campaignIndex].scheduled
            }
          })
        );
      })
    );
}


}
