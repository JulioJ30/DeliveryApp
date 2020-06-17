import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { pedidoService } from '../services/repartidorpedido.service';

import {RutasGoogleMapsService} from '../services/rutasgooglemaps.service';
import { UsuariosService } from '../services/usuarios.service';
import { AlertarService } from '../services/alertas.service';
import { LoadingService } from '../services/loading.service';
//import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-repartidorpedido-detalle',
  templateUrl: './repartidorpedido-detalle.page.html',
  styleUrls: ['./repartidorpedido-detalle.page.scss'],
})
export class RepartidorpedidoDetallePage implements OnInit {
  
  idpedido: number;
  detalles: any;


  fecha: string;
  new_fecha: any;
  descripcion: string;
  direccionusu: string;
  hora1: string;
  hora2: string;
  usu: string;

  // PRECIO TOTALES DE CADA PRODUCTO
  Preciomenu:number = 0;
  Precioplato:number = 0;
  Precioproducto:number = 0;

  // CONTENEDOR DE CADA PRODUCTO
  detallesMenu: any;
  detallesPlato: any;
  detallesProducto: any;

  total:number;
  idrepartidorUp:number;

  cantidad:number;
  xtiempo:string = "vacio";
  alert:any;
  loading:any;


  constructor(
    private pedidoDetalleService: pedidoService, 
    private rutaActiva: ActivatedRoute, 
    private maps:RutasGoogleMapsService,
    private usuarioS:UsuariosService,
    private alertS:AlertarService,
    private loadingS:LoadingService,
    private router:Router
    ) { 

    this.idpedido = this.rutaActiva.snapshot.params.idpedido;

    this.pedidoDetalleService.getPedidoRepartidorDe(this.idpedido).subscribe(
      result => {
      this.detalles = result;
      
      console.log(this.detalles);
      
      // PEDIDOS
      this.usu = this.detalles[0].usuario;
      this.descripcion = this.detalles[0].descripcion
      this.direccionusu = this.detalles[0].direccion_usuario;
      this.fecha = this.detalles[0].fechapedido
      let d = new Date(this.fecha);
      this.new_fecha = d.toLocaleDateString();
      this.hora1 = this.detalles[0].horaentrega;
      this.hora2 = this.detalles[0].horaentregareal;
      this.cantidad = this.detalles[0].cantidad;

      
      // GOOGLE MAPS
      this.maps.MostrarMapaIndividual('map',parseFloat(this.detalles[0].lat) ,parseFloat(this.detalles[0].lng));
      this.maps.calculateRoute(parseFloat(this.detalles[0].lat) ,parseFloat(this.detalles[0].lng),(err,rpt) => {
        this.xtiempo = rpt;
      });

      // OBTENEMOS LOS PLATOS A LA CARTA
      this.pedidoDetalleService.getPedidoRepartidorDePlato(this.idpedido).subscribe(data=>{
        // ASGINAMOS VALOR 
        this.detallesPlato = data;
        //CALCULAMOS TOTAL
        if(this.detallesPlato.length > 0){
          this.detallesPlato.forEach((obj)=>{
              this.Precioplato +=  (obj.Precio_plato_carta  * obj.cantidad);
          })
          
          // CALCULAMOS TOTAL
          this.getCantidad();
        }
      });

      // OBTENEMOS LOS MENUS
      this.pedidoDetalleService.getPedidoRepartidorDeMenu(this.idpedido).subscribe(data=>{
        // ASGINAMOS VALOR 
        this.detallesMenu = data;
        //console.log(        this.detallesMenu);
        //CALCULAMOS TOTAL
        if(this.detallesMenu.length > 0){
          this.detallesMenu.forEach((obj)=>{
              this.Preciomenu +=  (obj.Precio_plato  * obj.cantidad);
          })
          
          // CALCULAMOS TOTAL
          this.getCantidad();
        }
      });

      // OBTENEMOS LOS PRODUCTOS
      this.pedidoDetalleService.getPedidoRepartidorDeProducto(this.idpedido).subscribe(data=>{
        // ASGINAMOS VALOR 
        this.detallesProducto = data;
        //console.log(        this.detallesProducto);
        //CALCULAMOS TOTAL
        if(this.detallesProducto.length > 0){
          this.detallesProducto.forEach((obj)=>{
              this.Preciomenu +=  (obj.precio  * obj.cantidad);
          })
          
          // CALCULAMOS TOTAL
          this.getCantidad();
        }
      });

    });

  }

  ngOnInit() {
  }

  getCantidad(){
    this.total = this.Precioplato+ this.Precioproducto + this.Preciomenu;
  }

  async AceptarPedido(){
    
    //MOSTRAMOS CARGO
    this.loading = await this.loadingS.MostarCarga("Registrando");
    this.loading.present();

    this.idrepartidorUp = this.usuarioS.getID();
    this.pedidoDetalleService.putPedido(this.idpedido,this.idrepartidorUp).subscribe(async(data:any)=>{
      //console.log(data);
      if(data.status == "Actualizado"){
        this.alert = await this.alertS.Informar("Pedido aceptado");
        this.alert.present();

        //OCULTAMOS CARGA
        this.loading.dismiss();

        //REDIRECCIONAR
        this.router.navigate(['/tabs-repartidor/repartidorpedido/']);

      }else{

      }

      

    });
  }

}
