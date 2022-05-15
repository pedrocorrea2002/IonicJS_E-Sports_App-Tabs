import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApostasPage } from './apostas.page';

const routes: Routes = [
  {
    path: '',
    component: ApostasPage
  },
  {
    path: 'campeonato',
    loadChildren: () => import('./subpaginas/campeonato/campeonato.module').then( m => m.CampeonatoPageModule)
  },
  {
    path: 'time',
    loadChildren: () => import('./subpaginas/time/time.module').then( m => m.TimePageModule)
  },
  {
    path: 'jogador',
    loadChildren: () => import('./subpaginas/jogador/jogador.module').then( m => m.JogadorPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApostasPageRoutingModule {}
