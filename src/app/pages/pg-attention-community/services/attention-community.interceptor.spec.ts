import { TestBed } from '@angular/core/testing';

import { AttentionCommunityInterceptor } from './attention-community.interceptor';

describe('AttentionCommunityInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AttentionCommunityInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AttentionCommunityInterceptor = TestBed.inject(AttentionCommunityInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
