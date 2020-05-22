import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DireccionesusuariosPage } from '../direccionesusuarios/direccionesusuarios.page';
import { DirecionesUsuariosService } from '../services/direccionesusuarios.service';
import { UsuariosService } from '../services/usuarios.service';

// import { Ubicaciones } from '../models/direccionesusuarios.entidad';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  direcciones:any;
  idusuario:number;
  nombrecompleto:string;
  correo:string;
  datos:any;
  imagenperfil:any;



  constructor(private modalCrtl:ModalController,private direcusuS:DirecionesUsuariosService,private usuarioS:UsuariosService) { 

      this.idusuario = usuarioS.getID();
      this.datos = usuarioS.getInfo();
      this.nombrecompleto = this.datos.apellidos + ", " + this.datos.nombres;
      this.correo = this.datos.correo ;
      this.imagenperfil = this.datos.img == null ? "https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png" : this.datos.img;


      this.direcusuS.getDirecciones(this.idusuario).subscribe(data=>{
        this.direcciones = data;
      })

      
  }


  ngOnInit() {
  }


  // ABRIR MODAL PARA REGISTRAR DIRECCIONES
  async RegistrarDirecciones(){

      const modal = await this.modalCrtl.create({
        component: DireccionesusuariosPage,
      });

      // RECARGAMOS
      modal.onDidDismiss().then(data=>{
        this.direcusuS.getDirecciones(this.idusuario).subscribe(data=>{
          this.direcciones = data;
        })
      });

      await modal.present();
  }

  

}
