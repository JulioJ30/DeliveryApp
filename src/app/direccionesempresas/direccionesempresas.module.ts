import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DireccionesempresasPageRoutingModule } from './direccionesempresas-routing.module';

import { DireccionesempresasPage } from './direccionesempresas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DireccionesempresasPageRoutingModule
  ],
  declarations: [DireccionesempresasPage]
})
export class DireccionesempresasPageModule {}
