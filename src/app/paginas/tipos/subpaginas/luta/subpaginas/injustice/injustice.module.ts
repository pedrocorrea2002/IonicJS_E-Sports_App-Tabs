import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InjusticePageRoutingModule } from './injustice-routing.module';

import { InjusticePage } from './injustice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InjusticePageRoutingModule
  ],
  declarations: [InjusticePage]
})
export class InjusticePageModule {}
