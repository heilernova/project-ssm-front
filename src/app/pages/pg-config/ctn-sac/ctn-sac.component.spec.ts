import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtnSacComponent } from './ctn-sac.component';

describe('CtnSacComponent', () => {
  let component: CtnSacComponent;
  let fixture: ComponentFixture<CtnSacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtnSacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtnSacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
