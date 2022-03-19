import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlgTextBoxContentComponent } from './dlg-text-box-content.component';

describe('DlgTextBoxContentComponent', () => {
  let component: DlgTextBoxContentComponent;
  let fixture: ComponentFixture<DlgTextBoxContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DlgTextBoxContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DlgTextBoxContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
