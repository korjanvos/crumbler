import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Piece } from './PieceModel';

@Injectable({
  providedIn: 'root'
})

export class PieceStoreService implements OnInit {
  private piecesSubject: BehaviorSubject<Piece[]> = new BehaviorSubject([]);
  public readonly pieces$: Observable<Piece[]> = this.piecesSubject.asObservable();

  constructor() {
  }

  ngOnInit(): void {
  }

  private get pieces(): Piece[] {
    return this.piecesSubject.getValue();
  }

  private set pieces(val: Piece[]) {
    this.piecesSubject.next(val);
  }

  addPiece(piece: Piece) {
    this.pieces = [
      ...this.pieces,
      piece
    ];
  }

  removePiece(uuid: string) {
    this.pieces = this.pieces.filter(piece => piece.uuid !== uuid);
  }


  getPieces(): Piece[] {
    return this.pieces;
  }

  updatePiece(newPiece: Piece) {
    this.pieces = this.pieces.map(piece => {
      if (piece.uuid === newPiece.uuid) {
        return newPiece;
      } else {
        return piece;
      }
    });
  }
}
