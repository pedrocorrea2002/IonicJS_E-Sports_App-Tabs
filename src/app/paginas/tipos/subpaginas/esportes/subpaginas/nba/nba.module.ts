import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NBAPageRoutingModule } from './nba-routing.module';

import { NBAPage } from './nba.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NBAPageRoutingModule
  ],
  declarations: [NBAPage]
})
export class NBAPageModule {}
