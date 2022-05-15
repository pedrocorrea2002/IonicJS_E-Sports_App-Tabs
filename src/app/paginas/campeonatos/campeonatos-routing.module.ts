import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampeonatosPage } from './campeonatos.page';

const routes: Routes = [
  {
    path: '',
    component: CampeonatosPage
  },
  {
    path: 'nacional',
    loadChildren: () => import('./subpaginas/nacional/nacional.module').then( m => m.NacionalPageModule)
  },
  {
    path: 'internacional',
    loadChildren: () => import('./subpaginas/internacional/internacional.module').then( m => m.InternacionalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampeonatosPageRoutingModule {}
