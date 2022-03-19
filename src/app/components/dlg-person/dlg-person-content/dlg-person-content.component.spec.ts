import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlgPersonContentComponent } from './dlg-person-content.component';

describe('DlgPersonContentComponent', () => {
  let component: DlgPersonContentComponent;
  let fixture: ComponentFixture<DlgPersonContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DlgPersonContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DlgPersonContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
