import { Component, OnInit } from '@angular/core';


//SERVICIOS
import {EmpresasService} from '../services/empresas.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  ngOnInit(): void { }

  restaurantes :any;

  constructor(private empresasService:EmpresasService) { 
    this.empresasService.getEmpresas(1).subscribe(data=>{
      console.log(data);
      this.restaurantes = data;
    });
  }

  



}
