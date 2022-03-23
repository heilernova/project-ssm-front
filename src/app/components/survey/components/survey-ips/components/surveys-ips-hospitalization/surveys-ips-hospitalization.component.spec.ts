import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveysIpsHospitalizationComponent } from './surveys-ips-hospitalization.component';

describe('SurveysIpsHospitalizationComponent', () => {
  let component: SurveysIpsHospitalizationComponent;
  let fixture: ComponentFixture<SurveysIpsHospitalizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveysIpsHospitalizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveysIpsHospitalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
