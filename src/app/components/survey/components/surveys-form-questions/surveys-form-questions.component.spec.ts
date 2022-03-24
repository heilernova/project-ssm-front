import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveysFormQuestionsComponent } from './surveys-form-questions.component';

describe('SurveysFormQuestionsComponent', () => {
  let component: SurveysFormQuestionsComponent;
  let fixture: ComponentFixture<SurveysFormQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveysFormQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveysFormQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
