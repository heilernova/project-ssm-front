import { TestBed } from '@angular/core/testing';

import { DlgParagraphBoxService } from './dlg-paragraph-box.service';

describe('DlgParagraphBoxService', () => {
  let service: DlgParagraphBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DlgParagraphBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
