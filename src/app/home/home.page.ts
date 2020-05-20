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

  }

    // async getEmpresas(){
    //   let native =  this.http.get(`http://159.203.164.191:3000/api/empresas/1`,{},{
    //     'Content-Type':'application/json'
    //   });

    //   from(native).pipe(
    //     finalize(()=> this.rest3 = "4")
    //   ).subscribe(data=>{
    //     let parsed = JSON.parse(data.data);
    //     this.restaurantes = parsed;

    //   }), error =>{
    //     this.rest = JSON.stringify(error);
    //   }
    // }
  

  ngOnInit(){ 

  }

}
