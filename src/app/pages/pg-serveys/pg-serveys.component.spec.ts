import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgServeysComponent } from './pg-serveys.component';

describe('PgServeysComponent', () => {
  let component: PgServeysComponent;
  let fixture: ComponentFixture<PgServeysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgServeysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PgServeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
