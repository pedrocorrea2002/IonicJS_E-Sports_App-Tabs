import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'equipes',
    loadChildren: () => import('./paginas/equipes/equipes.module').then( m => m.EquipesPageModule)
  },
  {
    path: 'tipos',
    loadChildren: () => import('./paginas/tipos/tipos.module').then( m => m.TiposPageModule)
  },
  {
    path: 'apostas',
    loadChildren: () => import('./paginas/apostas/apostas.module').then( m => m.ApostasPageModule)
  },
  {
    path: 'campeonatos',
    loadChildren: () => import('./paginas/campeonatos/campeonatos.module').then( m => m.CampeonatosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
