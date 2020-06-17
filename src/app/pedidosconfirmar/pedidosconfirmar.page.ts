import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../services/pedidos.service';
import {DirecionesUsuariosService} from '../services/direccionesusuarios.service';
import { UsuariosService } from '../services/usuarios.service';
import { AlertarService } from '../services/alertas.service';
import { LoadingService } from '../services/loading.service';
import {PedidosEntidad } from '../models/pedidos.entidad';


@Component({
  selector: 'app-pedidosconfirmar',
  templateUrl: './pedidosconfirmar.page.html',
  styleUrls: ['./pedidosconfirmar.page.scss'],
})
export class PedidosconfirmarPage implements OnInit {

  pedidos:PedidosEntidad[];
  direcciones:any;
  iddireccionusu:number = 0;
  direccionesusu:any;
  idusuario:number;
  subtotal:number = 0;
  total:number = 0;
  alert:any;
  loading:any;

  constructor(
    private pedidosS:PedidosService,
    private direccionesS:DirecionesUsuariosService,
    private usuariosS:UsuariosService,
    private alertS:AlertarService,
    private loadingS:LoadingService

  ) { 
    this.getPedidos();
    this.total = this.subtotal + 5;
    this.getDirecciones();
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getPedidos();
    this.getDirecciones();
  }
  



  //METODOS TEMPORAL

  getDireccion(){
    // console.log(this.direccionesusu);
    this.iddireccionusu = this.direccionesusu;
  }

  getDirecciones(){
    this.idusuario = this.usuariosS.getID();
    this.direccionesS.getDirecciones(this.idusuario).subscribe(data=>{
      this.direcciones = data;
    })
  }

  aumentar(id:number,tipo:string){
    this.pedidosS.aumentar(id,tipo);
    this.getPedidos();
  }

  eliminar(id:number,tipo:string){
    // this.pedidosS.eliminar(id,tipo);
    this.pedidosS.eliminar(id,tipo);
    this.getPedidos();
  }

  disminuir(id:number,tipo:string){
    this.pedidosS.disminuir(id,tipo);
    this.getPedidos();
  }

  getPedidos(){
    this.pedidos = this.pedidosS.getPedidos();
    
    let sub = 0;
    this.pedidos.forEach(obj => {
        sub += obj.cantidad * obj.precio;
    });

    this.subtotal = sub;
    this.total = this.subtotal + 5;
  }


  //REGISTRAR PEDIDO
  async Comprar(){
    if(this.iddireccionusu != null){

        this.loading = await this.loadingS.MostarCarga("");
        this.loading.present();

        //REGISTRAMOS PEDIDO
        this.pedidosS.RegistrarPedidos(this.iddireccionusu,null).subscribe(async (data:any)=>{
          
          if(data.status){

            let idpedido = data.id;

            // RECORREMOS PEDIDOS DEL TEMPORAL
            this.pedidos.forEach(obj=>{              
              // REGISTRAMOS DETALLE DE PEDIDOS
              this.pedidosS.RegistrarDetPedidos(idpedido,obj.tipo,obj.id,obj.cantidad).subscribe((data:any)=>{
                  console.log(data);
              });
              
            })

            // OCULTAMOS CARGA
            this.loading.dismiss();
            //LIMPIAMOS CARGA
            this.pedidosS.LimpiarTmp();
            this.getPedidos();
            // MOSTRAMOS MENSAJE
            this.alert = await this.alertS.Informar("Pedido registrado");
            this.alert.present();
          }

        })

    }else{
      this.alert = await this.alertS.Informar("Seleccione una dirección de entrega");
      this.alert.present();
    }

  }

}
