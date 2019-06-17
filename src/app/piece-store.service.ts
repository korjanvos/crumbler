import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

class Piece {
  Uuid: string;
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

}
