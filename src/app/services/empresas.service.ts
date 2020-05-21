import { Injectable } from '@angular/core';
// HTTP
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  data:any;

  // INSTANCIAMOS CLASE HTTPCLIENT
  constructor(private http: HttpClient) {

  }

  //EJECUTAMOS

  getEmpresas(idtipoempresa){
    return this.http.get/*<Equipos[]>*/(`http://159.203.164.191:3000/api/empresas/${idtipoempresa}`);
  }

}
