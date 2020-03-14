import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NouvelleOffrePageRoutingModule } from './nouvelle-offre-routing.module';

import { NouvelleOffrePage } from './nouvelle-offre.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    NouvelleOffrePageRoutingModule
  ],
  declarations: [NouvelleOffrePage]
})
export class NouvelleOffrePageModule {}
