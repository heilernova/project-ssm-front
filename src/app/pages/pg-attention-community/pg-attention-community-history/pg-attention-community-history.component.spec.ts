import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgAttentionCommunityHistoryComponent } from './pg-attention-community-history.component';

describe('PgAttentionCommunityHistoryComponent', () => {
  let component: PgAttentionCommunityHistoryComponent;
  let fixture: ComponentFixture<PgAttentionCommunityHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgAttentionCommunityHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PgAttentionCommunityHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
