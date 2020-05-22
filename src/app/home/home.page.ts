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

  constructor(private empresasService:EmpresasService) { 

    this.empresasService.getEmpresas(1).subscribe(data=>{
      this.restaurantes = data;
    });

    // console.log(window.localStorage.getItem("datasesion"));

  }

  

  ngOnInit(){ 

  }

}
