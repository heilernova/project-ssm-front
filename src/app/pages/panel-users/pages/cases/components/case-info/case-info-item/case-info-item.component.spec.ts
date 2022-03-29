import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseInfoItemComponent } from './case-info-item.component';

describe('CaseInfoItemComponent', () => {
  let component: CaseInfoItemComponent;
  let fixture: ComponentFixture<CaseInfoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseInfoItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseInfoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
