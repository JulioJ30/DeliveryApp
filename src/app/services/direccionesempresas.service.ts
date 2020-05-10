import { Injectable } from '@angular/core';
// HTTP
import { HttpClient} from '@angular/common/http';

// ENTIDAD
//import { Equipos } from './models/equipos.entidad';

@Injectable({
  providedIn: 'root'
})
export class DireccionesEmpresasService {

  // INSTANCIAMOS CLASE HTTPCLIENT
  constructor(private http: HttpClient) {

  }

  //EJECUTAMOS
  getDirecciones(idempresa){
    return this.http.get/*<Equipos[]>*/(`http://159.203.164.191:3000/api/direccionesempresas/${idempresa}`);
  }

  getDireccion(iddireccion){
    return this.http.get/*<Equipos[]>*/(`http://159.203.164.191:3000/api/direccionesempresas/info/${iddireccion}`);
  }

}
