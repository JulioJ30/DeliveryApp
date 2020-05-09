import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductrestaurantesPage } from './productrestaurantes.page';

const routes: Routes = [
  {
    path: '',
    component: ProductrestaurantesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductrestaurantesPageRoutingModule {}
