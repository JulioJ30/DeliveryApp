import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: window.localStorage.getItem("datasesion") != null ? 'tabs':'inicio' ,pathMatch: 'full' },
  { 
    path: 'login', 
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'registrarusuario',
    loadChildren: () => import('./registrarusuario/registrarusuario.module').then( m => m.RegistrarusuarioPageModule)
  },  {
    path: 'tabs-repartidor',
    loadChildren: () => import('./tabs-repartidor/tabs-repartidor.module').then( m => m.TabsRepartidorPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
