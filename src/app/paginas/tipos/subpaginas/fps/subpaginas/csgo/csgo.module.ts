import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CSGOPageRoutingModule } from './csgo-routing.module';

import { CSGOPage } from './csgo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CSGOPageRoutingModule
  ],
  declarations: [CSGOPage]
})
export class CSGOPageModule {}
