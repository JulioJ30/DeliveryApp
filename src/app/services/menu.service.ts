import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class MenuService{

    constructor(private htpp: HttpClient){
        
    }

    getMenus(iddireccion){
        return this.htpp.get(`https://159.203.164.191:3000/api/menus/${iddireccion}`);
    }
}