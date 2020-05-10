import { Injectable } from '@angular/core';
import {Marker} from '../models/googlemarker.entidad';
// ENTIDAD
//import { Equipos } from './models/equipos.entidad';
declare var google;


@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {
    map : null;

  // INSTANCIAMOS CLASE HTTPCLIENT
  constructor() {

  }

  MostrarMapaIndividual(idmap:string,latitud:number,longitud:number,descripcion:string) {
        // create a new map by passing HTMLElement
        const mapEle: HTMLElement = document.getElementById(idmap);
        // create LatLng object
        const myLatLng = {lat: latitud, lng: longitud};
        // create map
        this.map = new google.maps.Map(mapEle, {
        center: myLatLng,
        zoom: 16,
        disableDefaultUI: true
        });

        google.maps.event.addListenerOnce(this.map, 'idle', () => {
            //this.renderMarkers();
            mapEle.classList.add('show-map');
            const marker = {
              position:{
                lat: latitud,
                lng: longitud
              },
              title :descripcion
            };
            this.addMarker(marker);
        });

    }

    addMarker(marker: Marker) {
        return new google.maps.Marker({
          position: marker.position,
          map: this.map,
          title: marker.title
        });
    }

}
