import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarusuarioPage } from './registrarusuario.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarusuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarusuarioPageRoutingModule {}
