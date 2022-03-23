import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveysIpsLaboratoryComponent } from './surveys-ips-laboratory.component';

describe('SurveysIpsLaboratoryComponent', () => {
  let component: SurveysIpsLaboratoryComponent;
  let fixture: ComponentFixture<SurveysIpsLaboratoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveysIpsLaboratoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveysIpsLaboratoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
