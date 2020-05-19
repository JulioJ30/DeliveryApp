import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

//SERVICE
import {DireccionesEmpresasService} from '../services/direccionesempresas.service';
import {PlatosCartasService} from '../services/platoscarta.service';
import {MenusService} from '../services/menus.service';
import {ProductosService} from '../services/productos.service';

import {GoogleMapsService} from '../services/googlemaps.service';
// declare var google;

@Component({
  selector: 'app-productrestaurantes',
  templateUrl: './productrestaurantes.page.html',
  styleUrls: ['./productrestaurantes.page.scss'],
})
export class ProductrestaurantesPage implements OnInit {


  direccion: any;
  platos: any;
  menus: any;
  productos:any;

  iddireccion:number;
  referencia: string;
  distrito: string;
  hora1: string;
  hora2: string;
  direccioninfo:string;

  // map : null;
  constructor(private deService:DireccionesEmpresasService,private rutaActiva: ActivatedRoute,private maps:GoogleMapsService,private platosService:PlatosCartasService,private productosService:ProductosService,private menusService:MenusService ) { 
    this.iddireccion = this.rutaActiva.snapshot.params.iddireccion;

    // ARMAMOS DIRECCIONES
    this.deService.getDireccion(this.iddireccion).subscribe(data=>{
      // console.log(data);
      this.direccion = data;
      // AGREGANDO VALORES
      this.referencia = this.direccion.referencia;
      this.direccioninfo = this.direccion.direccion;
      this.distrito = this.direccion.distrito;
      this.hora1 = this.direccion.hora_inicio;
      this.hora2 = this.direccion.hora_fin;

      this.maps.MostrarMapaIndividual('map',parseFloat(this.direccion.lat) ,parseFloat(this.direccion.lng),this.direccion.referencia);

    })

    // MOSTRAMOS PLATOS A LA CARTA
    this.platosService.getPlatosCarta(this.iddireccion).subscribe(data=>{
      this.platos = data;
    });

    // MOSTRAMOS MENUS
     this.menusService.getDetalleMenus(this.iddireccion).subscribe(data=>{
      this.menus = data;
      // console.log(this.menus);
    });

    // MOSTRAMOS PRODUCTOS
    this.productosService.getProductos(this.iddireccion).subscribe(data=>{
      this.productos = data;
      // console.log(this.productos);
    });
  }

  ngOnInit() {
  }


  

}

