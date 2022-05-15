import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsportesPage } from './esportes.page';

const routes: Routes = [
  {
    path: '',
    component: EsportesPage
  },
  {
    path: 'fifa',
    loadChildren: () => import('./subpaginas/fifa/fifa.module').then( m => m.FIFAPageModule)
  },
  {
    path: 'nba',
    loadChildren: () => import('./subpaginas/nba/nba.module').then( m => m.NBAPageModule)
  },
  {
    path: 'f1',
    loadChildren: () => import('./subpaginas/f1/f1.module').then( m => m.F1PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsportesPageRoutingModule {}
