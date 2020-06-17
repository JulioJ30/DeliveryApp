import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepartidorpedidoPage } from './repartidorpedido.page';

const routes: Routes = [
  {
    path: '',
    component: RepartidorpedidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepartidorpedidoPageRoutingModule {}
