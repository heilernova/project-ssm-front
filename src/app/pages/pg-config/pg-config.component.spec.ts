import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgConfigComponent } from './pg-config.component';

describe('PgConfigComponent', () => {
  let component: PgConfigComponent;
  let fixture: ComponentFixture<PgConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PgConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
