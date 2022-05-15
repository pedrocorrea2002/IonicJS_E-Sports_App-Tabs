import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsportesPageRoutingModule } from './esportes-routing.module';

import { EsportesPage } from './esportes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsportesPageRoutingModule
  ],
  declarations: [EsportesPage]
})
export class EsportesPageModule {}
