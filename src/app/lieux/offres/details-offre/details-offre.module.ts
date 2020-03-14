import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsOffrePageRoutingModule } from './details-offre-routing.module';

import { DetailsOffrePage } from './details-offre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsOffrePageRoutingModule
  ],
  declarations: [DetailsOffrePage]
})
export class DetailsOffrePageModule {}
