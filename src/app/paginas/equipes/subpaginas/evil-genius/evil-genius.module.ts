import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvilGeniusPageRoutingModule } from './evil-genius-routing.module';

import { EvilGeniusPage } from './evil-genius.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvilGeniusPageRoutingModule
  ],
  declarations: [EvilGeniusPage]
})
export class EvilGeniusPageModule {}
