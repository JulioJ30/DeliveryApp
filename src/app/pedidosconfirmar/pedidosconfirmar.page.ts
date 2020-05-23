import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../services/pedidos.service';
import {DirecionesUsuariosService} from '../services/direccionesusuarios.service';
import { UsuariosService } from '../services/usuarios.service';


@Component({
  selector: 'app-pedidosconfirmar',
  templateUrl: './pedidosconfirmar.page.html',
  styleUrls: ['./pedidosconfirmar.page.scss'],
})
export class PedidosconfirmarPage implements OnInit {

  pedidos:any;
  direcciones:any;
  idusuario:number;
  subtotal:number = 0;
  total:number = 0;

  constructor(
    private pedidosS:PedidosService,
    private direccionesS:DirecionesUsuariosService,
    private usuariosS:UsuariosService
  ) { 
    
    this.direccionesS.getDirecciones(this.idusuario).subscribe(data=>{
      this.direcciones = data;
    })
    this.total = this.subtotal + 5;

  }

  ngOnInit() {
  }
  
  ionViewWillEnter(){
    this.getPedidos();
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

}
