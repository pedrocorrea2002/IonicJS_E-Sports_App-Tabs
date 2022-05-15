import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonGOPageRoutingModule } from './pokemon-go-routing.module';

import { PokemonGOPage } from './pokemon-go.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonGOPageRoutingModule
  ],
  declarations: [PokemonGOPage]
})
export class PokemonGOPageModule {}
