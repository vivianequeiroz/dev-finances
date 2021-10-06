import { TestBed } from '@angular/core/testing';

import { StoreTransactionService } from './store-transaction.service';

describe('StoreTransactionService', () => {
  let service: StoreTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
