import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgAttentionCommunityComponent } from './pg-attention-community.component';

describe('PgAttentionCommunityComponent', () => {
  let component: PgAttentionCommunityComponent;
  let fixture: ComponentFixture<PgAttentionCommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgAttentionCommunityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PgAttentionCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
