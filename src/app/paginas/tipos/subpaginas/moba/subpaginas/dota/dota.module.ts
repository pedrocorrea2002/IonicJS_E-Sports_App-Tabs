import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DOTAPageRoutingModule } from './dota-routing.module';

import { DOTAPage } from './dota.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DOTAPageRoutingModule
  ],
  declarations: [DOTAPage]
})
export class DOTAPageModule {}
