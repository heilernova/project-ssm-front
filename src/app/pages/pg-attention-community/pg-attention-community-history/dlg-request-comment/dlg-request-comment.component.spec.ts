import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlgRequestCommentComponent } from './dlg-request-comment.component';

describe('DlgRequestCommentComponent', () => {
  let component: DlgRequestCommentComponent;
  let fixture: ComponentFixture<DlgRequestCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DlgRequestCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DlgRequestCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
