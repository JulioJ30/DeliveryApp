import { Injectable } from '@angular/core';
import {Marker} from '../models/googlemarker.entidad';
import {Geolocation} from '@ionic-native/geolocation/ngx';
// ENTIDAD
//import { Equipos } from './models/equipos.entidad';
declare var google;


@Injectable({
  providedIn: 'root'
})
export class RutasGoogleMapsService {
    map: any;
    directionsService: any = null;
    directionsDisplay: any = null;
    distanceMatrix: any = null;
    lng:number = 0;
    lat:number = 0;
    xtime : string;
    xdistancia: string;
   
  constructor(private geolocation: Geolocation) {

    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer();
    this.distanceMatrix = new google.maps.DistanceMatrixService();

  }

  MostrarMapaIndividual(idmap:string ,latitud:number,longitud:number) {

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

        this.directionsDisplay.setMap(this.map);

        google.maps.event.addListenerOnce(this.map, 'idle', () => {
            mapEle.classList.add('show-map');
            // let newtiempo = this.calculateRoute(latitud,longitud);
            // xti.classList.add("11");
            // console.log( this.xtiempo)
        });

    }

    options = {
        maximumAge: 3000, timeout: 5000, enableHighAccuracy: true
    };

    async calculateRoute(lat1:number,lng2:number,cb) {

        var resp = await this.geolocation.getCurrentPosition(this.options);

        //UBICACION ACTUAL
        this.lat = resp.coords.latitude;
        this.lng = resp.coords.longitude;
        
        // TRASANDO Y CALCULANDO
        this.directionsService.route({
            origin: {lat:this.lat, lng:this.lng},
            destination: {lat:lat1, lng:lng2},
            travelMode: google.maps.TravelMode.DRIVING,
            avoidTolls: true,
            unitSystem: google.maps.UnitSystem.METRIC
            }, (response, status)  => {
            if (status === google.maps.DirectionsStatus.OK) {
                this.directionsDisplay.setDirections(response);
                this.xtime  = response.routes[0].legs[0].duration.text;
               // return response.routes[0].legs[0].duration.text;
               //console.log(this.xtime, "timepo")
               cb(null,this.xtime);
                
            } else {
                //alert('No se encontró ningua direccion: ' + status);
                //return "error";
            }
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
