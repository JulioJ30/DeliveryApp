import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

// SERVICIOS
import {GoogleMapsService} from '../services/googlemaps.service';
import {DirecionesUsuariosService} from '../services/direccionesusuarios.service';
import {UsuariosService} from '../services/usuarios.service';
import {AlertarService} from '../services/alertas.service';
import {LoadingService} from '../services/loading.service';




import { NgModel } from '@angular/forms';



@Component({
  selector: 'app-direccionesusuarios',
  templateUrl: './direccionesusuarios.page.html',
  styleUrls: ['./direccionesusuarios.page.scss'],
})
export class DireccionesusuariosPage implements OnInit {


  lng:number = 0; //longitude
  lat:number = 0; //latitude
  direcusuE = {};//DireccionesUsuarios;
  alert:any;
  carga:any;



  options = {
    maximumAge: 3000, timeout: 5000, enableHighAccuracy: true
  };

  constructor(
      private geolocation:Geolocation,private platform: Platform,
      private modalCrtl:ModalController,private maps:GoogleMapsService,
      private alertS:AlertarService,private direcusuService:DirecionesUsuariosService,
      private usuarioE:UsuariosService,private loading:LoadingService
  ) { 

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

  //OBTENEMOS NUESTRA UBICACION
  getCurrentCoordinates() {
 
    this.geolocation.getCurrentPosition(this.options).then((resp) => {

      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
      this.maps.MostrarMapaIndividual('map2',this.lat ,this.lng,"Mi Ubicación");
      // -13.440235707136699, -76.14049022833623

      }).catch((error) => {
        console.log('Error getting location', error);
      });
  }

  //GUARDAR DIRECCION
  async guardarDireccion(form:NgModel){
    
    if(form.value.descripcion != ""){
      
      // MOSTRAMOS CARGA
     this.carga = await this.loading.MostarCarga("");
     this.carga.present();

      // ID DE USUARIOS
      let idusuario = this.usuarioE.getID();

      //REGISTRAMOS
      this.direcusuService.setDirecciones(idusuario,form.value.descripcion,this.lat ,this.lng).subscribe(async (data)=>{
        form.reset();
        // OCULTAMOS CARGA
        this.carga.dismiss();
        // MOSTRAMOS  MENSAJE
        this.alert = await this.alertS.Informar("Registrado correctamente");
        this.alert.present();
        //CERRAMOS MODAL
        this.modalCrtl.dismiss();

      },error=>{
        alert(error);
      })

      
    }else{
      this.alert = await this.alertS.Informar("Por favor complete los datos");
      this.alert.present();
    }
    
  }




}
