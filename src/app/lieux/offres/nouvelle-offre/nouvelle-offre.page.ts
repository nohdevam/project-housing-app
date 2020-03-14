import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-nouvelle-offre',
  templateUrl: './nouvelle-offre.page.html',
  styleUrls: ['./nouvelle-offre.page.scss'],
})
export class NouvelleOffrePage implements OnInit {

  constructor() { }

  form : FormGroup;

ngOnInit() {
    this.form = new FormGroup({
      titre: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      description: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(180)]
      }),
      prix: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.min(1)]
      })
    });
  }
  creationOffre(){

  }

}
