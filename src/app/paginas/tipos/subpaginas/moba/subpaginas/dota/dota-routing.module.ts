import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DOTAPage } from './dota.page';

const routes: Routes = [
  {
    path: '',
    component: DOTAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DOTAPageRoutingModule {}
