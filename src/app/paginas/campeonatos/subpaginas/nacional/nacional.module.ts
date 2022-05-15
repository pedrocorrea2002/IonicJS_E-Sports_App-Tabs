import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NacionalPageRoutingModule } from './nacional-routing.module';

import { NacionalPage } from './nacional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NacionalPageRoutingModule
  ],
  declarations: [NacionalPage]
})
export class NacionalPageModule {}
