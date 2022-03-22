import { TestBed } from '@angular/core/testing';

import { ApiCasesService } from './api-cases.service';

describe('ApiCasesService', () => {
  let service: ApiCasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
