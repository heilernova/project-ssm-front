import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlgCaseComponent } from './dlg-case.component';

describe('DlgCaseComponent', () => {
  let component: DlgCaseComponent;
  let fixture: ComponentFixture<DlgCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DlgCaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DlgCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
