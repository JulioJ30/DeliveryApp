import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";
import {GooglePlus} from '@ionic-native/google-plus/ngx';
import {Facebook,FacebookLoginResponse} from '@ionic-native/facebook/ngx';
import { auth } from 'firebase';
import { UsuariosService } from './usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth, private router : Router, private db : AngularFirestore,private google:GooglePlus,private fb:Facebook,private usuarioE:UsuariosService) { }

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
   async loginWithGoogle(){
    return this.google.login({}).then(res => {
      const userdatagoogle = res;

      // REGISTRAMOS
      this.usuarioE.RegistrarGF(userdatagoogle.familyName,userdatagoogle.givenName,userdatagoogle.email).subscribe((data:any)=>{

          // GUARDAMOS INFO EN LOCAL STORAGE
          this.usuarioE.setInfoGoogleFacebook(
            userdatagoogle.email,
            data.id,
            userdatagoogle.givenName,
            userdatagoogle.familyName,
            userdatagoogle.imageUrl
          );

      });
     

      return this.AFauth.auth.signInWithCredential(auth.GoogleAuthProvider.credential(null,userdatagoogle.accessToken));
    })
    
  }

  //LOGIN FACEBOOK
  loginWithFacebook(){
   return this.fb.login(['public_profile', 'email']).then((res: FacebookLoginResponse) => 
    {
     
      // OBTENEMOS INFO DE FACEBOOK
      this.usuarioE.getInfoFacebook(res.authResponse.accessToken).subscribe((dataf:any)=>{

          //REGISTRAMOS 
          this.usuarioE.RegistrarGF(dataf.last_name,dataf.first_name,dataf.email).subscribe((data:any)=>{

            // GUARDAMOS INFO EN LOCAL STORAGE
            this.usuarioE.setInfoGoogleFacebook(
              dataf.email,
              data.id,
              dataf.first_name,
              dataf.last_name,
              `https://graph.facebook.com/${dataf.id}/picture?type=square`
            );

          });

      });



      return this.AFauth.auth.signInWithCredential(auth.FacebookAuthProvider.credential(res.authResponse.accessToken));
      
    }
  )
  .catch(e => console.log('Error logging into Facebook', e));


  }

}