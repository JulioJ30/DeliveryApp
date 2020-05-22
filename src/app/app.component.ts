import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router:Router,
    private menu:MenuController,
    private google:GooglePlus,
    private facebook:Facebook
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  // CERRAR SESION
  logout(){
    window.localStorage.clear();
    // CERRAMOS SESION GOOGLE FACEBOOk
    this.facebook.logout().then().catch(err=>{
      alert("Error " + err);
    });

    this.google.logout().catch(err=>{

    });


    this.router.navigate(['/inicio/']);
    this.menu.close();
  }
}
