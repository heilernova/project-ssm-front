import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxDateComponent } from './box-date.component';

describe('BoxDateComponent', () => {
  let component: BoxDateComponent;
  let fixture: ComponentFixture<BoxDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
