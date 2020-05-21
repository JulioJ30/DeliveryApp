import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
// import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Platform } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

// SERVICIOS
import {GoogleMapsService} from '../services/googlemaps.service';


@Component({
  selector: 'app-direccionesusuarios',
  templateUrl: './direccionesusuarios.page.html',
  styleUrls: ['./direccionesusuarios.page.scss'],
})
export class DireccionesusuariosPage implements OnInit {

  data:string;
  //Set the properties in this class
  lng:number = -76.1347185; //longitude
  lat:number =-13.4177938; //latitude
  
  options = {
    maximumAge: 3000, timeout: 5000, enableHighAccuracy: true
  };

  constructor(private geolocation:Geolocation,private platform: Platform,private modalCrtl:ModalController,private maps:GoogleMapsService) { 

    this.platform.ready().then(()=>{
      this.maps.MostrarMapaIndividual('map2',this.lat ,this.lng,"Plaza  de Armas");
    });

  }

  ngOnInit() {
  }

  // MODAL
  CerrarModal(){
    this.modalCrtl.dismiss();
  }

    // use geolocation to get user's device coordinates
    getCurrentCoordinates() {
      // this.maps.MostrarMapaIndividual('map2',-13.440235707136699 ,-76.14049022833623,"Plaza  de Armas");

      this.geolocation.getCurrentPosition(this.options).then((resp) => {
        this.lat = resp.coords.latitude;
        this.lng = resp.coords.longitude;
        this.maps.MostrarMapaIndividual('map',this.lat ,this.lng,"Plaza  de Armas");
        // -13.440235707136699, -76.14049022833623

       }).catch((error) => {
         console.log('Error getting location', error);
       });
    }

 

}
