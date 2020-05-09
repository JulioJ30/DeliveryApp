import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductrestaurantesPageRoutingModule } from './productrestaurantes-routing.module';

import { ProductrestaurantesPage } from './productrestaurantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductrestaurantesPageRoutingModule
  ],
  declarations: [ProductrestaurantesPage]
})
export class ProductrestaurantesPageModule {}
