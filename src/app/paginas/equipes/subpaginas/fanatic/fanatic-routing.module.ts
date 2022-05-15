import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FanaticPage } from './fanatic.page';

const routes: Routes = [
  {
    path: '',
    component: FanaticPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FanaticPageRoutingModule {}
