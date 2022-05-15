import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CSGOPage } from './csgo.page';

const routes: Routes = [
  {
    path: '',
    component: CSGOPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CSGOPageRoutingModule {}
