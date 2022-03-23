import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyEpsComponent } from './survey-eps.component';

describe('SurveyEpsComponent', () => {
  let component: SurveyEpsComponent;
  let fixture: ComponentFixture<SurveyEpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyEpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyEpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
