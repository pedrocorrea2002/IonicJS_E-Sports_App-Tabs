import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquipesPage } from './equipes.page';

const routes: Routes = [
  {
    path: '',
    component: EquipesPage
  },
  {
    path: 'fanatic',
    loadChildren: () => import('./subpaginas/fanatic/fanatic.module').then( m => m.FanaticPageModule)
  },
  {
    path: 'pain-games',
    loadChildren: () => import('./subpaginas/pain-games/pain-games.module').then( m => m.PainGamesPageModule)
  },
  {
    path: 'evil-genius',
    loadChildren: () => import('./subpaginas/evil-genius/evil-genius.module').then( m => m.EvilGeniusPageModule)
  },
  {
    path: 'og',
    loadChildren: () => import('./subpaginas/og/og.module').then( m => m.OGPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquipesPageRoutingModule {}
