import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

class Piece {
  uuid: string;
  text: string;
}

export class PieceStoreService implements OnInit {
  private piecesSubject: BehaviorSubject<Piece[]> = new BehaviorSubject([]);
  public readonly pieces$: Observable<Piece[]> = this._pieces_.asObservable();

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
}
