import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgConfigEpsComponent } from './pg-config-eps.component';

describe('PgConfigEpsComponent', () => {
  let component: PgConfigEpsComponent;
  let fixture: ComponentFixture<PgConfigEpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgConfigEpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PgConfigEpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
