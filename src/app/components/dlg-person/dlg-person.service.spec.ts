import { TestBed } from '@angular/core/testing';

import { DlgPersonService } from './dlg-person.service';

describe('DlgPersonService', () => {
  let service: DlgPersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DlgPersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
