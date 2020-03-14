import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NouvelleOffrePage } from './nouvelle-offre.page';

describe('NouvelleOffrePage', () => {
  let component: NouvelleOffrePage;
  let fixture: ComponentFixture<NouvelleOffrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouvelleOffrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NouvelleOffrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
