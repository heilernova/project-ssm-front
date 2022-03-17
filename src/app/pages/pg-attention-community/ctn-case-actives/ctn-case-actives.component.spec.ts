import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtnCaseActivesComponent } from './ctn-case-actives.component';

describe('CtnCaseActivesComponent', () => {
  let component: CtnCaseActivesComponent;
  let fixture: ComponentFixture<CtnCaseActivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtnCaseActivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtnCaseActivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
