import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OffresPageRoutingModule } from './offres-routing.module';

import { OffresPage } from './offres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OffresPageRoutingModule
  ],
  declarations: [OffresPage]
})
export class OffresPageModule {}
