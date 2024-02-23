import { TestBed } from '@angular/core/testing';

import { SpecJobPageService } from './spec-job-page.service';

describe('SpecJobPageService', () => {
  let service: SpecJobPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecJobPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
