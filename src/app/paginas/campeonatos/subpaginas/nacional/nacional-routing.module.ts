import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NacionalPage } from './nacional.page';

const routes: Routes = [
  {
    path: '',
    component: NacionalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NacionalPageRoutingModule {}
