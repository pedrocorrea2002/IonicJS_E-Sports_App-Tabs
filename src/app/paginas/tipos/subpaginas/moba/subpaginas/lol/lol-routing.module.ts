import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LOLPage } from './lol.page';

const routes: Routes = [
  {
    path: '',
    component: LOLPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LOLPageRoutingModule {}
