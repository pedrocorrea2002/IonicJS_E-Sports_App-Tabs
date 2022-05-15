import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonGOPage } from './pokemon-go.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonGOPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonGOPageRoutingModule {}
