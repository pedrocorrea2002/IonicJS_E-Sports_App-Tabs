import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TiposPage } from './tipos.page';

const routes: Routes = [
  {
    path: '',
    component: TiposPage
  },
  {
    path: 'moba',
    loadChildren: () => import('./subpaginas/moba/moba.module').then( m => m.MOBAPageModule)
  },
  {
    path: 'fps',
    loadChildren: () => import('./subpaginas/fps/fps.module').then( m => m.FPSPageModule)
  },
  {
    path: 'esportes',
    loadChildren: () => import('./subpaginas/esportes/esportes.module').then( m => m.EsportesPageModule)
  },
  {
    path: 'luta',
    loadChildren: () => import('./subpaginas/luta/luta.module').then( m => m.LutaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiposPageRoutingModule {}
