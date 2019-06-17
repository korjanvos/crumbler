import { TestBed } from '@angular/core/testing';

import { PieceStoreService } from './piece-store.service';
import { Piece } from './PieceModel';

describe('PieceStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PieceStoreService = TestBed.get(PieceStoreService);
    expect(service).toBeTruthy();
    let lastIndex  = service.getPieces().length-1;
    let p:Piece = new Piece();
    service.addPiece(p);
    expect(service.getPieces()[lastIndex+1] ===  p).toBeTruthy();
  });
});
