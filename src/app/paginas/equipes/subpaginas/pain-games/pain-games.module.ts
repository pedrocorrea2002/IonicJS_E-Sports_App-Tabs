import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PainGamesPageRoutingModule } from './pain-games-routing.module';

import { PainGamesPage } from './pain-games.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PainGamesPageRoutingModule
  ],
  declarations: [PainGamesPage]
})
export class PainGamesPageModule {}
