import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgConfigServicesComponent } from './pg-config-services.component';

describe('PgConfigServicesComponent', () => {
  let component: PgConfigServicesComponent;
  let fixture: ComponentFixture<PgConfigServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgConfigServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PgConfigServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
