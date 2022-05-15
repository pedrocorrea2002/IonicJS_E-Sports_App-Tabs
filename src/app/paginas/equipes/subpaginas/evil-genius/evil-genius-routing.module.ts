import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvilGeniusPage } from './evil-genius.page';

const routes: Routes = [
  {
    path: '',
    component: EvilGeniusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvilGeniusPageRoutingModule {}
