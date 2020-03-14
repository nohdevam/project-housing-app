import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LieuxPage } from './lieux.page';

describe('LieuxPage', () => {
  let component: LieuxPage;
  let fixture: ComponentFixture<LieuxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LieuxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LieuxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
