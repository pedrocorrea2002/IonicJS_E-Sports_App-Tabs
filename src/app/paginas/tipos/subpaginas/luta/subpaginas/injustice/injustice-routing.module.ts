import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InjusticePage } from './injustice.page';

const routes: Routes = [
  {
    path: '',
    component: InjusticePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InjusticePageRoutingModule {}
