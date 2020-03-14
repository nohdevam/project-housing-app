import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailLieuxPageRoutingModule } from './detail-lieux-routing.module';

import { DetailLieuxPage } from './detail-lieux.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailLieuxPageRoutingModule
  ],
  declarations: [DetailLieuxPage]
})
export class DetailLieuxPageModule {}
