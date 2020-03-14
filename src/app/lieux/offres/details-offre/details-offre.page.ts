import { Component, OnInit } from '@angular/core';
import { Lieu } from '../../lieux.model';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { LieuxService } from '../../lieux.service';

@Component({
  selector: 'app-details-offre',
  templateUrl: './details-offre.page.html',
  styleUrls: ['./details-offre.page.scss'],
})
export class DetailsOffrePage implements OnInit {

  lieu: Lieu;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private lieuxService: LieuxService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('lieuId')) {
        this.navCtrl.navigateBack('/lieux/tabs/offres');
        return;
      }
      this.lieu = this.lieuxService
                .avoirLieu(paramMap.get('lieuId'));
    });
  }
}

