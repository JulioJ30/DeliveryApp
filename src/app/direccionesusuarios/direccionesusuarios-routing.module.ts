import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DireccionesusuariosPage } from './direccionesusuarios.page';

const routes: Routes = [
  {
    path: '',
    component: DireccionesusuariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DireccionesusuariosPageRoutingModule {}
