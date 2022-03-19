import { TestBed } from '@angular/core/testing';

import { DlgTextBoxService } from './dlg-text-box.service';

describe('DlgTextBoxService', () => {
  let service: DlgTextBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DlgTextBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
