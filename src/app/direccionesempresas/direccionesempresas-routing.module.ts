import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DireccionesempresasPage } from './direccionesempresas.page';

const routes: Routes = [
  {
    path: '',
    component: DireccionesempresasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DireccionesempresasPageRoutingModule {}
