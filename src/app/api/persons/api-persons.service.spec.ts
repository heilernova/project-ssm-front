import { TestBed } from '@angular/core/testing';

import { ApiPersonsService } from './api-persons.service';

describe('ApiPersonsService', () => {
  let service: ApiPersonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPersonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
