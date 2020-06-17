import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsRepartidorPage } from './tabs-repartidor.page';

const routes: Routes = [
  {
    path: '',
    component: TabsRepartidorPage,
    children:
    [
      //REPARTIDOR
      {
        path: 'repartidorpedido',
        loadChildren: () => import('../repartidorpedido/repartidorpedido.module').then( m => m.RepartidorpedidoPageModule)
      },
      {
        path: 'repartidorpedido/repartidorpedido-detalle/:idpedido',
        loadChildren: () => import('../repartidorpedido-detalle/repartidorpedido-detalle.module').then( m => m.RepartidorpedidoDetallePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs-repartidor/repartidorpedido',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs-repartidor/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsRepartidorPageRoutingModule {}
