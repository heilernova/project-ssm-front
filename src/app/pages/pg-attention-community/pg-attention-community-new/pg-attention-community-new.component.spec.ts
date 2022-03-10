import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgAttentionCommunityNewComponent } from './pg-attention-community-new.component';

describe('PgAttentionCommunityNewComponent', () => {
  let component: PgAttentionCommunityNewComponent;
  let fixture: ComponentFixture<PgAttentionCommunityNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgAttentionCommunityNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PgAttentionCommunityNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
