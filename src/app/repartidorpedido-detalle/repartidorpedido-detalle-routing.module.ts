import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepartidorpedidoDetallePage } from './repartidorpedido-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: RepartidorpedidoDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepartidorpedidoDetallePageRoutingModule {}
