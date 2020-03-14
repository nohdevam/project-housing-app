import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsOffrePage } from './details-offre.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsOffrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsOffrePageRoutingModule {}
