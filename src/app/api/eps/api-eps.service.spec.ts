import { TestBed } from '@angular/core/testing';

import { ApiEpsService } from './api-eps.service';

describe('ApiEpsService', () => {
  let service: ApiEpsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiEpsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
