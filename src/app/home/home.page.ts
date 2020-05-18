import { Component, OnInit } from '@angular/core';
//SERVICIOS
import {EmpresasService} from '../services/empresas.service';
//CARGA
import {LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  //VARIABLES
  restaurantes :any;
  // carga        :any;

  constructor(private empresasService:EmpresasService,private loading:LoadingController) { 
  }

  ngOnInit(){ 
    //MOSTRAMOS DATOS
    // this.presentLoading();
    this.empresasService.getEmpresas(1).subscribe(data=>{
      // console.log(data);
      this.restaurantes = data;
      // this.carga.dismiss();
    });

  }

  // async presentLoading() {
  //   this.carga = await this.loading.create({
  //     message: 'Cargando...'
  //   });
  //   return await this.carga.present();
  // }
    


}
