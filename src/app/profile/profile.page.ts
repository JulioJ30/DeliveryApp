import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DireccionesusuariosPage } from '../direccionesusuarios/direccionesusuarios.page';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private modalCrtl:ModalController) { 

  }

  ngOnInit() {
  }


  // ABRIR MODAL PARA REGISTRAR DIRECCIONES
  async RegistrarDirecciones(){

      const modal = await this.modalCrtl.create({
        component: DireccionesusuariosPage,
      });

      await modal.present();
  }

}
