import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { DireccionesusuariosPage } from '../direccionesusuarios/direccionesusuarios.page';
import { DireccionesusuariosPageModule } from '../direccionesusuarios/direccionesusuarios.module';

@NgModule({
  entryComponents: [
    DireccionesusuariosPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    DireccionesusuariosPageModule
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
