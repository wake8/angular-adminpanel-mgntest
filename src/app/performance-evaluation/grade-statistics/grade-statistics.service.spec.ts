import { TestBed } from '@angular/core/testing';

import { GradeStatisticsService } from './grade-statistics.service';

describe('GradeStatisticsService', () => {
  let service: GradeStatisticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GradeStatisticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
