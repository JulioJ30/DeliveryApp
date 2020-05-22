import { Injectable } from '@angular/core';
// HTTP
import { HttpClient,HttpHeaders} from '@angular/common/http';
// CARGA
import {LoadingService} from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  data:any;
  loading:any;
  datasesion:any;

  // INSTANCIAMOS CLASE HTTPCLIENT
  constructor(private http: HttpClient,private loadingS:LoadingService) {

  }

  //LOGIN
  Login(usuario:string,clave:string){

    let headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );

    let datos = {
        usuario: usuario,
        clave: clave,
    }

    return this.http.post("http://159.203.164.191:3000/api/usuarios/login/",datos,{headers:headers});

  }

  //REGISTRO
  Registrar(apellidos:string,nombres:string,correo:string,clave:string){

    // CARGA
    // this.loading = await this.loadingS.MostarCarga("");
    // this.loading.present();

    let headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );

    let datos = {
      apellidos: apellidos,
      nombres: nombres,
      correo: correo,
      clave: clave,
    }

    return this.http.post("http://159.203.164.191:3000/api/usuarios/registrar/",datos,{headers:headers});

  }

  //REGISTRO GOOGLE FACEBOOK
  RegistrarGF(apellidos:string,nombres:string,correo:string){

    // CARGA
    // this.loading = await this.loadingS.MostarCarga("");
    // this.loading.present();

    let headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );

    let datos = {
      apellidos: apellidos,
      nombres: nombres,
      correo: correo
    }

    return this.http.post("http://159.203.164.191:3000/api/usuarios/registrargf/",datos,{headers:headers});

  }

  //RETORNAMOS ID DE USUARIOS  ACTIVO
  getID(){
    let datasesion = window.localStorage.getItem("datasesion");
    this.data = JSON.parse(datasesion);

    return this.data.idusuario;
  }
 
  //INFORMACION DEL USAURIO
  getInfo(){
    let datasesion = window.localStorage.getItem("datasesion");
    this.data = JSON.parse(datasesion);
    return this.data;
  }

  //INFORMACION DEL USAURIO
  setInfoGoogle(correo:string,id:number,nombres:string,apellidos:string,img:string){
    
      

      this.datasesion = {
        idusuario   : id,
        correo      : correo,
        nombres     : nombres,
        apellidos   : apellidos,
        img         :img
      }

      // GUARDAMOS DATOS EN LOCAL STORAGE
      window.localStorage.setItem("datasesion",JSON.stringify(this.datasesion));

    
  }

}
