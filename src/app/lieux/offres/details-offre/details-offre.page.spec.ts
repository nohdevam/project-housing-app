import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailsOffrePage } from './details-offre.page';

describe('DetailsOffrePage', () => {
  let component: DetailsOffrePage;
  let fixture: ComponentFixture<DetailsOffrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsOffrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsOffrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
