import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)},
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  {
    path: 'tabs/home/productrestaurantes/:iddireccion',
    loadChildren: () => import('./productrestaurantes/productrestaurantes.module').then( m => m.ProductrestaurantesPageModule)
  },
  // {
  //   path: 'tabs/home/direccionesempresas/:idempresa',
  //   loadChildren: () => import('./direccionesempresas/direccionesempresas.module').then( m => m.DireccionesempresasPageModule)
  // },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  // {
  //   path: 'direccionesusuarios',
  //   loadChildren: () => import('./direccionesusuarios/direccionesusuarios.module').then( m => m.DireccionesusuariosPageModule)
  // },

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
