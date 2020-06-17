import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsRepartidorPageRoutingModule } from './tabs-repartidor-routing.module';

import { TabsRepartidorPage } from './tabs-repartidor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsRepartidorPageRoutingModule
  ],
  declarations: [TabsRepartidorPage]
})
export class TabsRepartidorPageModule {}
