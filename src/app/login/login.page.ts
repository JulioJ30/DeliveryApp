import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import {AlertarService} from '../services/alertas.service';
import {UsuariosService} from '../services/usuarios.service';

import {LoadingService} from '../services/loading.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss','../app.component.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;
  carga:any;
  alerta: any;
  datasesion:any;

  // token:string = "token";
  response:string ="response";


  constructor(
    private authService: AuthService, private router: Router,
    private alert:AlertarService,private usuarioE:UsuariosService,
    private loading:LoadingService) { 

      if(window.localStorage.getItem("datasesion") != null){
          this.router.navigate(["/tabs"]);
      }

    }

  ngOnInit() {
  }

  async doLogin(form:NgModel)
  {
   
    //OBTENEMOS DATOS
    let usuario = form.value.usuario;
    let clave = form.value.clave;

    // VALIDAMOS
    if(usuario != "" && clave != ""){
      // MOSTRAMOS CARGA
      this.carga = await this.loading.MostarCarga("");
      this.carga.present();

      this.usuarioE.Login(usuario,clave).subscribe(async (data)=>{
        // console.log(data);
        this.datasesion = data[0];
        if(this.datasesion != undefined){
          
          // GUARDAMOS DATOS EN LOCAL STORAGE
          window.localStorage.setItem("datasesion",JSON.stringify(this.datasesion));
          //REDIRECCIONAMOS
          this.router.navigate(['/tabs/']);

        }else{
          this.alerta = await this.alert.Informar("Credenciales incorrectas");
          this.alerta.present();
        }

        // OCULTAMAOS CARGA
        this.carga.dismiss();

      })
      
    }else{
      this.alerta = await this.alert.Informar("Complete los campos");
      this.alerta.present();
    }

    
    // this.authService.login(this.email, this.password).then( () =>{
    //   this.router.navigate(['/home']);
    // }).catch(err => {
    //   alert('los datos son incorrectos o no existe el usuario');
    // })
    // this.router.navigate(['/tabs/']);
  }


  loginGoogle(){
    this.authService.loginWithGoogle().then((res)=>{
      this.router.navigate(['/tabs/']);
    }).catch(err => {
      alert(err);
    })
  }

  loginFacebook(){

    this.authService.loginWithFacebook().then(()=>{
      this.router.navigate(['/tabs/']);
    }).catch(err => {
      alert(err );
    })  

  }

}
