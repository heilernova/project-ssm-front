import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonMasComponent } from './radio-button-mas.component';

describe('RadioButtonMasComponent', () => {
  let component: RadioButtonMasComponent;
  let fixture: ComponentFixture<RadioButtonMasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioButtonMasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButtonMasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
