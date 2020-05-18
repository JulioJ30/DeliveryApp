import { Component } from '@angular/core';
// HTTP
import {LoadingController } from '@ionic/angular';


export class LoadingService {

  // INSTANCIAMOS CLASE HTTPCLIENT
  constructor(private loading: LoadingController) {

  }

  // async presentLoading() {
  //   const loading = await this.loading.create({
  //     message: 'Please wait...',
  //     duration: 2000
  //   });
  //   return await loading.present();
  // }

}
