import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class pedidoService{

    //PROCEDEMOS A INSTANCIAR CLASE HTTPCLIENT
    constructor(private http: HttpClient){
        
    }

    //EJECUTAMOS
    getPedidoRepartidor(){
        return this.http.get/*<Equipos[]>*/(`http://159.203.164.191:3000/api/pedidoRe`);
    }

    getPedidoRepartidorDe(idpedido)
    {
         return this.http.get(`http://159.203.164.191:3000/api/pedidoRe/detalles/${idpedido}`);

    }

    getPedidoRepartidorDeMenu(idpedido)
    {
         return this.http.get(`http://159.203.164.191:3000/api/pedidoRe/detalles-menu/${idpedido}`);

    }

    getPedidoRepartidorDePlato(idpedido)
    {
         return this.http.get(`http://159.203.164.191:3000/api/pedidoRe/detalles-plato/${idpedido}`);

    }

    getPedidoRepartidorDeProducto(idpedido)
    {
         return this.http.get(`http://159.203.164.191:3000/api/pedidoRe/detalles-productos/${idpedido}`);

    }

    putPedido(idpedidoUP:number,idrepartidorUP:number)
    {
        let headers = new HttpHeaders();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json' );

        let datos = {
            
            idrepartidor: idrepartidorUP
        }
        return this.http.put(`http://159.203.164.191:3000/api/pedidoRe/cambioestado/${idpedidoUP}`,datos,{headers:headers});
    }
}
