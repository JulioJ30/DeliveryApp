import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
//SERVICE
import {DireccionesEmpresasService} from '../services/direccionesempresas.service';


@Component({
  selector: 'app-direccionesempresas',
  templateUrl: './direccionesempresas.page.html',
  styleUrls: ['./direccionesempresas.page.scss'],
})
export class DireccionesempresasPage implements OnInit {

  idempresa :number;
  direcciones: any;
  constructor(private rutaActiva: ActivatedRoute,private deService:DireccionesEmpresasService) {
    this.idempresa = this.rutaActiva.snapshot.params.idempresa;
    this.deService.getDirecciones(this.idempresa).subscribe(data=>{
      console.log(data);
      this.direcciones = data;
    })
    // console.log(this.idempresa);
   }

  ngOnInit() {
  }

}
