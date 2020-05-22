import { Component, OnInit } from '@angular/core';
import {  NgModel } from '@angular/forms';
import { AlertarService } from '../services/alertas.service';
import { UsuariosService } from '../services/usuarios.service';
import { LoadingService } from '../services/loading.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarusuario',
  templateUrl: './registrarusuario.page.html',
  styleUrls: ['./registrarusuario.page.scss'],
})
export class RegistrarusuarioPage implements OnInit {

  alert:any;
  loading:any;
  data:any;
  datasesion :any;

  constructor(
    private alertS:AlertarService,
    private usuarioS:UsuariosService,
    private loadingS:LoadingService,
    private router:Router
  ) {
    if(window.localStorage.getItem("datasesion") != null){
      this.router.navigate(["/tabs"]);
    }
  }
 

  ngOnInit() {
  }


  async doRegister(form:NgModel){

    let apellidos = form.value.apellidos;
    let nombres   = form.value.nombres;
    let correo    = form.value.correo;
    let clave     = form.value.clave;
    let clave2    = form.value.clave2;

    if(apellidos != "" && nombres != "" && correo != "" && clave != "" && clave2 != "" ){


      if(clave == clave2){
        this.loading = await this.loadingS.MostarCarga("");
        this.loading.present();

       this.usuarioS.Registrar(apellidos,nombres,correo,clave).subscribe(async (data)=>{
          this.data = data;
          
          this.loading.dismiss();

          if(this.data.status){

              //OCULTAMOS CARGA
              this.loading.dismiss();

              // INICIAMOS SESION
              this.datasesion = {
                idusuario : this.data.id,
                correo : correo,
                nombres : nombres,
                apellidos : apellidos,
                img:null
              }
            

              // GUARDAMOS DATOS EN LOCAL STORAGE
              window.localStorage.setItem("datasesion",JSON.stringify(this.datasesion));
              //REDIRECCIONAMOS
              this.router.navigate(['/tabs/']);
              // console.log(this.data);
          }else{
            this.alert = await this.alertS.Informar("Ocurrio un error");
            this.alert.present();
          }

       })
        

      }else{
        this.alert = await this.alertS.Informar("Las claves no coinciden");
        this.alert.present();
      }

    }else{
      this.alert = await this.alertS.Informar("Complete los campos");
      this.alert.present();
    }




    console.log(form.value);
  }

}
