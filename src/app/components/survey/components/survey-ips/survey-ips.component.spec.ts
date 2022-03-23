import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyIpsComponent } from './survey-ips.component';

describe('SurveyIpsComponent', () => {
  let component: SurveyIpsComponent;
  let fixture: ComponentFixture<SurveyIpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyIpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyIpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
