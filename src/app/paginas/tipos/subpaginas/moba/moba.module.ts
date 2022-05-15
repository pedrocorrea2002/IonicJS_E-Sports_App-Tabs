import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MOBAPageRoutingModule } from './moba-routing.module';

import { MOBAPage } from './moba.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MOBAPageRoutingModule
  ],
  declarations: [MOBAPage]
})
export class MOBAPageModule {}
