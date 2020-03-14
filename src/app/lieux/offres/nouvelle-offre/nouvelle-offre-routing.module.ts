import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NouvelleOffrePage } from './nouvelle-offre.page';

const routes: Routes = [
  {
    path: '',
    component: NouvelleOffrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NouvelleOffrePageRoutingModule {}
