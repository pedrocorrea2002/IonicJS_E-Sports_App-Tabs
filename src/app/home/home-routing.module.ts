import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'equipes',
        loadChildren: () => import('../paginas/equipes/equipes.module').then( m => m.EquipesPageModule)
      },
      {
        path: 'tipos',
        loadChildren: () => import('../paginas/tipos/tipos.module').then( m => m.TiposPageModule)
      },
      {
        path: 'apostas',
        loadChildren: () => import('../paginas/apostas/apostas.module').then( m => m.ApostasPageModule)
      },
      {
        path: 'campeonatos',
        loadChildren: () => import('../paginas/campeonatos/campeonatos.module').then( m => m.CampeonatosPageModule)
      },
      {
        path:'',
        redirectTo: '/home/campeonatos',
        pathMatch:'full'
      }
    ]
  },
  {
    path:'',
    redirectTo: '/home/campeonatos',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
