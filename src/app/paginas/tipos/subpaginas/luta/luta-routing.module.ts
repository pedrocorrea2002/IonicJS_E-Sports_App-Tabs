import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LutaPage } from './luta.page';

const routes: Routes = [
  {
    path: '',
    component: LutaPage
  },
  {
    path: 'street-fighter',
    loadChildren: () => import('./subpaginas/street-fighter/street-fighter.module').then( m => m.StreetFighterPageModule)
  },
  {
    path: 'mortal-kombat',
    loadChildren: () => import('./subpaginas/mortal-kombat/mortal-kombat.module').then( m => m.MortalKombatPageModule)
  },
  {
    path: 'injustice',
    loadChildren: () => import('./subpaginas/injustice/injustice.module').then( m => m.InjusticePageModule)
  },
  {
    path: 'pokemon-go',
    loadChildren: () => import('./subpaginas/pokemon-go/pokemon-go.module').then( m => m.PokemonGOPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LutaPageRoutingModule {}
