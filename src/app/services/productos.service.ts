import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class ProductosService{
    constructor(private http: HttpClient){

    }

    getProductos(iddireccion){
        return this.http.get(`https://159.203.164.191:3000/api/productos/${iddireccion}`)
    }
}