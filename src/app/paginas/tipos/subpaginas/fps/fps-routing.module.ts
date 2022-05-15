import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FPSPage } from './fps.page';

const routes: Routes = [
  {
    path: '',
    component: FPSPage
  },
  {
    path: 'csgo',
    loadChildren: () => import('./subpaginas/csgo/csgo.module').then( m => m.CSGOPageModule)
  },
  {
    path: 'r6',
    loadChildren: () => import('./subpaginas/r6/r6.module').then( m => m.R6PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FPSPageRoutingModule {}
