import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LieuxPageRoutingModule } from './lieux-routing.module';

import { LieuxPage } from './lieux.page';

@NgModule({
  imports: [ 
    CommonModule,
    IonicModule,
    LieuxPageRoutingModule
  ],
  declarations: [LieuxPage]
})
export class LieuxPageModule {}
