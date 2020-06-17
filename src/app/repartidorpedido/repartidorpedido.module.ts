import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepartidorpedidoPageRoutingModule } from './repartidorpedido-routing.module';

import { RepartidorpedidoPage } from './repartidorpedido.page';

//FONTAWESOME
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepartidorpedidoPageRoutingModule,
    FontAwesomeModule
  ],
  declarations: [RepartidorpedidoPage]
})
export class RepartidorpedidoPageModule {}
