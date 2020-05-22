import { Injectable } from '@angular/core';
// HTTP
import { HttpClient,HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DirecionesUsuariosService {

  data:any;

  // INSTANCIAMOS CLASE HTTPCLIENT
  constructor(private http: HttpClient) {

  }

  //REGISTRAR DIRECCIONES DE USUARIOS
  setDirecciones(idusuario:number,descripcion:string,lat:number,lng:number){

    let headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );

    let datos = {
        idusuario: idusuario,
        descripcion: descripcion,
        lat: lat,
        lng:lng
    }

    return this.http.post("http://159.203.164.191:3000/api/direccionesusuarios/registrar/",datos,{headers:headers});
    
  }

  getDirecciones(idusuario:number){

    return this.http.get(`http://159.203.164.191:3000/api/direccionesusuarios/${idusuario}`);

  }
 

}
