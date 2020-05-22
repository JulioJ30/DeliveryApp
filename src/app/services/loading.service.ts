import { Injectable } from '@angular/core';

import { Component } from '@angular/core';
// HTTP
import {LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  // INSTANCIAMOS CLASE HTTPCLIENT
  constructor(private loading: LoadingController) {

  }

  async MostarCarga(mensaje:string) {
    const carga = await this.loading.create({
      message: mensaje,
      // duration: 2000
    });
    return carga;
  }

}
