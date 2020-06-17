import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {PedidosEntidad} from '../models/pedidos.entidad';

@Injectable({
    providedIn: 'root'
})
export class PedidosService{

  pedidostmp:PedidosEntidad[] = [
    {
      cantidad: 1,
      descripcion: "1/4 de pollo",
      id: 1,
      idusuario: null,
      img: null,
      nombre: "Pollo a la brasa",
      precio: 10,
      tipo: "C"
    },
    {
      cantidad: 1,
      descripcion: "1/8 de pollo",
      id: 2,
      idusuario: null,
      img: null,
      nombre: "Pollo a la brasa",
      precio: 10,
      tipo: "C"
    }
  ];


    //PROCEDEMOS A INSTANCIAR CLASE HTTPCLIENT
    constructor(private http: HttpClient){

    }

    AgregarTmp(pedido:PedidosEntidad){

        let indice = null;
        let cont = 0;
    
        //BUSCAMOS  SI EXISTE
        if(this.pedidostmp.length > 0){
    
            this.pedidostmp.forEach(obj=>{
              if(obj.id == pedido.id && obj.tipo == pedido.tipo){
                  indice = cont;
    
              }
              cont++;
    
            }); 
    
            if(indice != null ){
              this.pedidostmp[indice].cantidad += pedido.cantidad;
            }else{
              this.pedidostmp.push(pedido);
            }
            
    
        }else{
          this.pedidostmp.push(pedido);
        }
    
        console.log(this.pedidostmp);
    }

    getPedidos(){
      return this.pedidostmp;
    }

    aumentar(id:number,tipo:string){
      this.pedidostmp.map((obj)=>{
        if(obj.id == id && obj.tipo == tipo){
          obj.cantidad += 1;
        }

        return obj;
      })
    }

    disminuir(id:number,tipo:string){

      // let devolver = false;

      this.pedidostmp.map((obj)=>{
        if(obj.id == id && obj.tipo == tipo){
          obj.cantidad -= 1;
          // if(obj.cantidad == 0){
          //   devolver = true;
          // }
        }

        return obj;
      })

      // return devolver;
    }

    eliminar(id:number,tipo:string){
      // console.log(id,tipo);
      // console.log(this.pedidostmp);
      let array  = this.pedidostmp.filter(obj=>
        obj.id == id && obj.tipo == tipo
      )

      let index = this.pedidostmp.indexOf(array[0]);

      if (index > -1) {
        this.pedidostmp.splice(index, 1);
      }
    }

    
}
