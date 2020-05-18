import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

//SERVICE
import {DireccionesEmpresasService} from '../services/direccionesempresas.service';
import {GoogleMapsService} from '../services/googlemaps.service';
// declare var google;

@Component({
  selector: 'app-productrestaurantes',
  templateUrl: './productrestaurantes.page.html',
  styleUrls: ['./productrestaurantes.page.scss'],
})
export class ProductrestaurantesPage implements OnInit {


  iddireccion:number;
  direccion: any;
  referencia: string;
  distrito: string;
  hora1: string;
  hora2: string;

  direccioninfo:string;
  // map : null;
  constructor(private deService:DireccionesEmpresasService,private rutaActiva: ActivatedRoute,private maps:GoogleMapsService) { 
    this.iddireccion = this.rutaActiva.snapshot.params.iddireccion;

    this.deService.getDireccion(this.iddireccion).subscribe(data=>{
      console.log(data);
      this.direccion = data;
      // AGREGANDO VALORES
      this.referencia = this.direccion.referencia;
      this.direccioninfo = this.direccion.direccion;
      this.distrito = this.direccion.distrito;
      this.hora1 = this.direccion.hora_inicio;
      this.hora2 = this.direccion.hora_fin;

      this.maps.MostrarMapaIndividual('map',parseFloat(this.direccion.lat) ,parseFloat(this.direccion.lng),this.direccion.referencia);

    })
  }

  ngOnInit() {
    // this.iddireccion = this.rutaActiva.snapshot.params.iddireccion;

    // this.deService.getDireccion(this.iddireccion).subscribe(data=>{
    //   console.log(data);
    //   this.direccion = data;
    //   this.maps.MostrarMapaIndividual('map',parseFloat(this.direccion.lat) ,parseFloat(this.direccion.lng),this.direccion.referencia);

    // })
  }


  

}

