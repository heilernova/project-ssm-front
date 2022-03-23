import { TestBed } from '@angular/core/testing';

import { ApiSurveysService } from './api-surveys.service';

describe('ApiSurveysService', () => {
  let service: ApiSurveysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSurveysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
