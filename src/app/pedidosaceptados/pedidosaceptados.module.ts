import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidosaceptadosPageRoutingModule } from './pedidosaceptados-routing.module';

import { PedidosaceptadosPage } from './pedidosaceptados.page';

//FONTAWESOME
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidosaceptadosPageRoutingModule,
    FontAwesomeModule
  ],
  declarations: [PedidosaceptadosPage]
})
export class PedidosaceptadosPageModule {}
