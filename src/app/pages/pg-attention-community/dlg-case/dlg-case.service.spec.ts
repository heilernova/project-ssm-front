import { TestBed } from '@angular/core/testing';

import { DlgCaseService } from './dlg-case.service';

describe('DlgCaseService', () => {
  let service: DlgCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DlgCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
