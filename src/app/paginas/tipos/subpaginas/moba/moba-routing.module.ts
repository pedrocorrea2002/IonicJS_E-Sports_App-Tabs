import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MOBAPage } from './moba.page';

const routes: Routes = [
  {
    path: '',
    component: MOBAPage
  },
  {
    path: 'dota',
    loadChildren: () => import('./subpaginas/dota/dota.module').then( m => m.DOTAPageModule)
  },
  {
    path: 'lol',
    loadChildren: () => import('./subpaginas/lol/lol.module').then( m => m.LOLPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MOBAPageRoutingModule {}
