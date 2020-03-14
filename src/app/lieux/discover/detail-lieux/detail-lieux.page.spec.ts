import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailLieuxPage } from './detail-lieux.page';

describe('DetailLieuxPage', () => {
  let component: DetailLieuxPage;
  let fixture: ComponentFixture<DetailLieuxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailLieuxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailLieuxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
