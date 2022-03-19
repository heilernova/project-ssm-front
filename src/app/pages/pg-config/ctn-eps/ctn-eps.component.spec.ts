import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtnEpsComponent } from './ctn-eps.component';

describe('CtnEpsComponent', () => {
  let component: CtnEpsComponent;
  let fixture: ComponentFixture<CtnEpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtnEpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtnEpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
