import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidosconfirmarPage } from './pedidosconfirmar.page';

const routes: Routes = [
  {
    path: '',
    component: PedidosconfirmarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidosconfirmarPageRoutingModule {}
