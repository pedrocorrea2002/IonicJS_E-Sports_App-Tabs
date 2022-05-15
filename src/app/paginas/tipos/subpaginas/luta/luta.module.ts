import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LutaPageRoutingModule } from './luta-routing.module';

import { LutaPage } from './luta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LutaPageRoutingModule
  ],
  declarations: [LutaPage]
})
export class LutaPageModule {}
