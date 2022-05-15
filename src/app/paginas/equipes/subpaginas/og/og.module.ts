import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OGPageRoutingModule } from './og-routing.module';

import { OGPage } from './og.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OGPageRoutingModule
  ],
  declarations: [OGPage]
})
export class OGPageModule {}
