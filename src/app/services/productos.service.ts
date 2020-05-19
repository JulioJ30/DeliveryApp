import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProductosService{

    //PROCEDEMOS A INSTANCIAR CLASE HTTPCLIENT
    constructor(private http: HttpClient){

    }

    //EJECUTAMOS
    getProductos(iddireccion){
        return this.http.get/*<Equipos[]>*/(`http://159.203.164.191:3000/api/productos/${iddireccion}`);
    }
}
