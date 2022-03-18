import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlgCaseObservationComponent } from './dlg-case-observation.component';

describe('DlgCaseObservationComponent', () => {
  let component: DlgCaseObservationComponent;
  let fixture: ComponentFixture<DlgCaseObservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DlgCaseObservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DlgCaseObservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
