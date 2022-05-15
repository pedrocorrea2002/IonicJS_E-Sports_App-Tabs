import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LOLPageRoutingModule } from './lol-routing.module';

import { LOLPage } from './lol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LOLPageRoutingModule
  ],
  declarations: [LOLPage]
})
export class LOLPageModule {}
