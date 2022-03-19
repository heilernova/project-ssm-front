import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlgEpsInfoComponent } from './dlg-eps-info.component';

describe('DlgEpsInfoComponent', () => {
  let component: DlgEpsInfoComponent;
  let fixture: ComponentFixture<DlgEpsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DlgEpsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DlgEpsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
