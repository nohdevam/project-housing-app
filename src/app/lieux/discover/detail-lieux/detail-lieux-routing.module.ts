import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailLieuxPage } from './detail-lieux.page';

const routes: Routes = [
  {
    path: '',
    component: DetailLieuxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailLieuxPageRoutingModule {}
