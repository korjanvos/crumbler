import { TestBed } from '@angular/core/testing';

import { PieceStoreService } from './piece-store.service';

describe('PieceStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PieceStoreService = TestBed.get(PieceStoreService);
    expect(service).toBeTruthy();
  });
});
