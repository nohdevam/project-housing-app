import { Component, OnInit } from '@angular/core';
import { LieuxService } from '../lieux.service';
import { Lieu } from '../lieux.model';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  lieuxChargement: Lieu[];

  constructor(private lieuxService: LieuxService) { }

  ngOnInit() {
    this.lieuxChargement = this.lieuxService.lieux;
  }

}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        