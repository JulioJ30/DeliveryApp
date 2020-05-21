import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

// SERVICIOS
import {GoogleMapsService} from '../services/googlemaps.service';
import {DirecionesUsuariosService} from '../services/direccionesusuarios.service';

import { NgModel } from '@angular/forms';

import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-direccionesusuarios',
  templateUrl: './direccionesusuarios.page.html',
  styleUrls: ['./direccionesusuarios.page.scss'],
})
export class DireccionesusuariosPage implements OnInit {

  // data:string;
  //Set the properties in this class
  lng:number = 0; //longitude
  lat:number = 0; //latitude
  direcusuE = {};//DireccionesUsuarios;
  // direcusu2:DireccionesUsuarios;

  options = {
    maximumAge: 3000, timeout: 5000, enableHighAccuracy: true
  };

  constructor(
      private geolocation:Geolocation,private platform: Platform,
      private modalCrtl:ModalController,private maps:GoogleMapsService,
      private alert:AlertController,private direcusuService:DirecionesUsuariosService
  ) { 

    // this.direcusuE =  Direccionesusuario
    // LAT Y LNG DE PLAZA DE ARMAS DE CHINCHA
    this.platform.ready().then(()=>{
      this.maps.MostrarMapaIndividual('map2',-13.4177938,-76.1347185,"Plaza  de Armas");
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

  //GUARDAR DIRECCION
  guardarDireccion(form:NgModel){
    // console.log(form.value);
    if(form.value.descripcion != ""){
      
      //REGISTRAMOS
      this.direcusuService.setDirecciones(1,form.value.descripcion,50,100);
      

    }else{
      this.presentAlert();
    }
    
  }


  // ALERTA
  async presentAlert() {
    const alert = await this.alert.create({
      // header:'<ion-icon name="alert-circle-outline"></ion-icon>',
      header: 'Por favor complete la descripción y su ubicación',
      subHeader: 'Delivery',
      message: '<ion-icon name="alert-circle-outline"></ion-icon>',
      buttons: ['OK']
    });

    await alert.present();
  }
 

}
