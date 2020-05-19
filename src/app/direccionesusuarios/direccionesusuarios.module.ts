import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DireccionesusuariosPageRoutingModule } from './direccionesusuarios-routing.module';

import { DireccionesusuariosPage } from './direccionesusuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DireccionesusuariosPageRoutingModule
  ],
  declarations: [DireccionesusuariosPage]
})
export class DireccionesusuariosPageModule {}
