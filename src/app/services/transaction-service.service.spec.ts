import { TestBed } from '@angular/core/testing';

import { TransactionService } from './transaction.service';

describe('TransactionServiceService', () => {
  let service: TransactionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
