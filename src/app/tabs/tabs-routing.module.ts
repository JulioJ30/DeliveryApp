import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      // HOME - RESTAURANTES - DIRECCIONES - PLATOs
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'home/direccionesempresas/:idempresa',
        loadChildren: () => import('../direccionesempresas/direccionesempresas.module').then(m => m.DireccionesempresasPageModule)
      },
      {
        path: 'home/productrestaurantes/:iddireccion',
        loadChildren: () => import('../productrestaurantes/productrestaurantes.module').then(m => m.ProductrestaurantesPageModule)
      },
      // PERFIL
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
