import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseInfoComponent } from './case-info.component';

describe('CaseInfoComponent', () => {
  let component: CaseInfoComponent;
  let fixture: ComponentFixture<CaseInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
