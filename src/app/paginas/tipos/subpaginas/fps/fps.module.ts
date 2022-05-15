import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FPSPageRoutingModule } from './fps-routing.module';

import { FPSPage } from './fps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FPSPageRoutingModule
  ],
  declarations: [FPSPage]
})
export class FPSPageModule {}
