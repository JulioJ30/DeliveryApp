import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";
import {GooglePlus} from '@ionic-native/google-plus/ngx';
import {Facebook,FacebookLoginResponse} from '@ionic-native/facebook/ngx';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth, private router : Router, private db : AngularFirestore,private google:GooglePlus,private fb:Facebook) { }

  login(email:string, password:string){

    return new Promise((resolve, rejected) =>{
      this.AFauth.auth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user);
      }).catch(err => rejected(err));
    });

   
  }

  logout(){
    this.AFauth.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    })
  }

  register(email : string, password : string, name : string){

    return new Promise ((resolve, reject) => {
      this.AFauth.auth.createUserWithEmailAndPassword(email, password).then( res =>{
          // console.log(res.user.uid);
        const uid = res.user.uid;
          this.db.collection('users').doc(uid).set({
            name : name,
            uid : uid
          })
        
        resolve(res)
      }).catch( err => reject(err))
    })
    
  }

  //LOGIN CON GOOGLE
   loginWithGoogle(){
    return this.google.login({}).then(res => {
      const userdatagoogle = res;
      return this.AFauth.auth.signInWithCredential(auth.GoogleAuthProvider.credential(null,userdatagoogle.accessToken));
    })
  }

  //LOGIN FACEBOOK
  loginWithFacebook(){
   return this.fb.login(['public_profile', 'user_friends', 'email']).then((res: FacebookLoginResponse) => 
    {
      //const userdatafacebook = res;
      return this.AFauth.auth.signInWithCredential(auth.FacebookAuthProvider.credential(res.authResponse.accessToken));
      //console.log('Logged into Facebook!', res)
    }
  )
  .catch(e => console.log('Error logging into Facebook', e));
  }

}