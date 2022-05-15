import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OGPage } from './og.page';

const routes: Routes = [
  {
    path: '',
    component: OGPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OGPageRoutingModule {}
