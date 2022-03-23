import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveysIpsFormComponent } from './surveys-ips-form.component';

describe('SurveysIpsFormComponent', () => {
  let component: SurveysIpsFormComponent;
  let fixture: ComponentFixture<SurveysIpsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveysIpsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveysIpsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
