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
  // map : null;
  constructor(private deService:DireccionesEmpresasService,private rutaActiva: ActivatedRoute,private maps:GoogleMapsService) { 
    // this.iddireccion = this.rutaActiva.snapshot.params.iddireccion;

    // this.deService.getDireccion(this.iddireccion).subscribe(data=>{
    //   console.log(data);
    //   this.direccion = data;
    //   this.maps.MostrarMapaIndividual('map',parseFloat(this.direccion.lat) ,parseFloat(this.direccion.lng),this.direccion.referencia);

    // })
  }

  ngOnInit() {
    this.iddireccion = this.rutaActiva.snapshot.params.iddireccion;

    this.deService.getDireccion(this.iddireccion).subscribe(data=>{
      console.log(data);
      this.direccion = data;
      this.maps.MostrarMapaIndividual('map',parseFloat(this.direccion.lat) ,parseFloat(this.direccion.lng),this.direccion.referencia);

    })
  }


  

}

