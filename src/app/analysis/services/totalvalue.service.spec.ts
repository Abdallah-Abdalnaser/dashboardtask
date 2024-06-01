import { TestBed } from '@angular/core/testing';

import { TotalvalueService } from './totalvalue.service';

describe('TotalvalueService', () => {
  let service: TotalvalueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotalvalueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
