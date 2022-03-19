import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesActiveComponent } from './cases-active.component';

describe('CasesActiveComponent', () => {
  let component: CasesActiveComponent;
  let fixture: ComponentFixture<CasesActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasesActiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasesActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
