import { TestBed } from '@angular/core/testing';

import { ReviewCycleService } from './review-cycle.service';

describe('ReviewCycleService', () => {
  let service: ReviewCycleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewCycleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
