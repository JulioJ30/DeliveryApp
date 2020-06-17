import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import {PedidosEntidad} from '../models/pedidos.entidad';

@Injectable({
    providedIn: 'root'
})
export class PedidosService{

  pedidostmp:PedidosEntidad[] = [
                            
  ];


    //PROCEDEMOS A INSTANCIAR CLASE HTTPCLIENT
    constructor(private http: HttpClient){

    }

    // METODOS TEMPORALES

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

    LimpiarTmp(){
      this.pedidostmp = [];
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
          
          if(obj.cantidad > 1 ){
            obj.cantidad -= 1;
          }
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
  

    //API REST
    RegistrarPedidos(iddireccion:number,horaentrega?:string){

      let headers = new HttpHeaders();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json' );
  
      let datos = {
        iddireccion: iddireccion,
        horaentrega: horaentrega,
      }
  
      // this.http.post("http://159.203.164.191:3000/api/pedidos/registrar/",datos,{headers:headers}).subscribe((data:any)=>{
        // return data;
      // })

      return this.http.post("http://159.203.164.191:3000/api/pedidos/registrar/",datos,{headers:headers});

  
    }

    RegistrarDetPedidos(idpedido:number,tipo:string,id:number,cantidad:number){

      let headers = new HttpHeaders();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json' );
  
      let datos = {
        idpedido: idpedido,
        tipo: tipo,
        id:id,
        cantidad:cantidad
      }

      
  
      return this.http.post("http://159.203.164.191:3000/api/depedidos/registrar/",datos,{headers:headers});
  
    }

    
}
