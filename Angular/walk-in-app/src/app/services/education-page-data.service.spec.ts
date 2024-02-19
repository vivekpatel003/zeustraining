import { TestBed } from '@angular/core/testing';

import { EducationPageDataService } from './education-page-data.service';

describe('EducationPageDataService', () => {
  let service: EducationPageDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducationPageDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
