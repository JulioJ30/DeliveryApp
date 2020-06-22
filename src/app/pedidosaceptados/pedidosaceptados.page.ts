import { Component, OnInit } from '@angular/core';
import { pedidoService} from '../services/repartidorpedido.service';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-pedidosaceptados',
  templateUrl: './pedidosaceptados.page.html',
  styleUrls: ['./pedidosaceptados.page.scss'],
})
export class PedidosaceptadosPage implements OnInit {

  aceptados: any;
  idrepartidor: number;
  constructor(
    private pedidoservice: pedidoService, 
    private usuarioS:UsuariosService) {
    
      this.idrepartidor = this.usuarioS.getID();
      this.pedidoservice.getPedidoaceptados(this.idrepartidor).subscribe(data => {
        this.aceptados = data;
        console.log(this.aceptados);
      })
  }

  ngOnInit() {
  }

  doRefresh(event){
    setTimeout(()=>{
      this.pedidoservice.getPedidoaceptados(this.idrepartidor).subscribe(data=> {
        this.aceptados = data;
      });
      event.target.complete();
    },1500);
  }

  ionViewWillEnter(){
    this.pedidoservice.getPedidoaceptados(this.idrepartidor).subscribe(data=>{
      this.aceptados = data;
    });
  }

}
