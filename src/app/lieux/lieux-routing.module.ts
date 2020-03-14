import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LieuxPage } from './lieux.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: LieuxPage,
    children: [
      {
        path: 'discover',
        children: [
          {
            path: '',
            loadChildren: () => import('./discover/discover.module').then( m => m.DiscoverPageModule)
          },
          {
            path: ':lieuId',
            loadChildren: () => import('./discover/detail-lieux/detail-lieux.module').then( m => m.DetailLieuxPageModule)
          }
        ]
      },
      {
        path: 'offres',
        children: [
          {
            path: '',
            loadChildren: () => import('./offres/offres.module').then( m => m.OffresPageModule)
          },
          {
            path: 'new',
            loadChildren: () => import('./offres/nouvelle-offre/nouvelle-offre.module').then( m => m.NouvelleOffrePageModule)
          },
          {
            path: ':lieuId',
            loadChildren: () => import('./offres/details-offre/details-offre.module').then( m => m.DetailsOffrePageModule)
          }
        
        ]
      },
    ]
  },
  {
    // Le chemin par défaut 
    
    path: '',
    redirectTo: '/lieux/tabs/discover',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LieuxPageRoutingModule {}
