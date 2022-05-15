import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FanaticPageRoutingModule } from './fanatic-routing.module';

import { FanaticPage } from './fanatic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FanaticPageRoutingModule
  ],
  declarations: [FanaticPage]
})
export class FanaticPageModule {}
