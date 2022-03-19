import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtnProfileComponent } from './ctn-profile.component';

describe('CtnProfileComponent', () => {
  let component: CtnProfileComponent;
  let fixture: ComponentFixture<CtnProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtnProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtnProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
