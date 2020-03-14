import { Component, OnInit } from '@angular/core';
import { Lieu } from '../lieux.model';
import { LieuxService } from '../lieux.service';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.page.html',
  styleUrls: ['./offres.page.scss'],
})
export class OffresPage implements OnInit {

  offres: Lieu[];

  constructor(private lieuxService: LieuxService) { }

  ngOnInit() {
    this.offres = this.lieuxService.lieux;
  }


}
