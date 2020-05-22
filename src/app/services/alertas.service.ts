import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class AlertarService {

  data:any;

  // INSTANCIAMOS CLASE HTTPCLIENT
  constructor(private alert:AlertController) {

  }

    // ALERTA
    async Informar(mensaje:string) {
        const alert = await this.alert.create({
          // header:'<ion-icon name="alert-circle-outline"></ion-icon>',
          header: mensaje,
          subHeader: 'Delivery',
          message: '<ion-icon name="alert-circle-outline"></ion-icon>',
          buttons: ['OK']
        });

        return alert;
        // await alert.present();
    }



}
