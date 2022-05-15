import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FIFAPageRoutingModule } from './fifa-routing.module';

import { FIFAPage } from './fifa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FIFAPageRoutingModule
  ],
  declarations: [FIFAPage]
})
export class FIFAPageModule {}
