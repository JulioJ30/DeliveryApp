import { Component, OnInit } from '@angular/core';
import { pedidoService } from '../services/repartidorpedido.service';

@Component({
  selector: 'app-repartidorpedido',
  templateUrl: './repartidorpedido.page.html',
  styleUrls: ['./repartidorpedido.page.scss'],
})
export class RepartidorpedidoPage implements OnInit {

  pedidosRe:any;
  idpedido:number;
  constructor(private repartidorService:pedidoService) { 

    this.repartidorService.getPedidoRepartidor().subscribe(data=>{
      this.pedidosRe = data;
      console.log(this.pedidosRe);
    });
  }

  ngOnInit() {
  }

  doRefresh(event){
      
    setTimeout(()=>{
        this.repartidorService.getPedidoRepartidor().subscribe(data=>{
          this.pedidosRe = data;
        });
        event.target.complete();
    },1500)
  }

  ionViewWillEnter(){
    this.repartidorService.getPedidoRepartidor().subscribe(data=>{
      this.pedidosRe = data;
    });
  }

}
