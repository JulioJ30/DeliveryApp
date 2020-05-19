import { Component, OnInit } from '@angular/core';
//SERVICIOS
import {EmpresasService} from '../services/empresas.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  //VARIABLES
  restaurantes :any;
  rest : string;
  // carga        :any;

  constructor(private empresasService:EmpresasService) { 
    this.rest = "vacio";
    this.empresasService.getEmpresas(1).subscribe(
      (data)=>{
        this.rest = data[0].nombre_comercial;
        this.restaurantes = data;
      },
      (error)=>{
        console.log(error);
        this.rest =  JSON.stringify(error);
      }
    );
  }

  ngOnInit(){ 

  }

}
