import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FIFAPage } from './fifa.page';

const routes: Routes = [
  {
    path: '',
    component: FIFAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FIFAPageRoutingModule {}
