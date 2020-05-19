import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
// import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Platform } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-direccionesusuarios',
  templateUrl: './direccionesusuarios.page.html',
  styleUrls: ['./direccionesusuarios.page.scss'],
})
export class DireccionesusuariosPage implements OnInit {

  data:string;
  //Set the properties in this class
  long: any; //longitude
  lati: any; //latitude

  options = {
    maximumAge: 3000, timeout: 5000, enableHighAccuracy: true
  };

  constructor(private geolocation:Geolocation,private platform: Platform,private modalCrtl:ModalController,) { 

  }

  ngOnInit() {
  }

  // MODAL
  CerrarModal(){
    this.modalCrtl.dismiss();
  }

    // use geolocation to get user's device coordinates
    getCurrentCoordinates() {
      this.geolocation.getCurrentPosition(this.options).then((resp) => {
        this.lati = resp.coords.latitude;
        this.long = resp.coords.longitude;
       }).catch((error) => {
         console.log('Error getting location', error);
       });
    }

 

}
