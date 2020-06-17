import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidosconfirmarPageRoutingModule } from './pedidosconfirmar-routing.module';

import { PedidosconfirmarPage } from './pedidosconfirmar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidosconfirmarPageRoutingModule
  ],
  declarations: [PedidosconfirmarPage]
})
export class PedidosconfirmarPageModule {}
