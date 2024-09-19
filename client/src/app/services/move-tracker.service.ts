import { Injectable, signal } from '@angular/core';
import { Observable, Subject } from 'rxjs';

const FirstMoveMakesPlayerX = true;
export type MoveDataModel = { payerXMadeMove: boolean };

@Injectable({
  providedIn: 'root'
})
export class MoveTrackerService {
  private isPlayerXTurn = signal<boolean>(FirstMoveMakesPlayerX);
  private moveSubject: Subject<MoveDataModel>;

  constructor() {
    this.moveSubject = new Subject<MoveDataModel>();
  }

  get IsPlayerXTurn(): boolean {
    return this.isPlayerXTurn();
  }
  get OnMove(): Observable<MoveDataModel> {
    return this.moveSubject.asObservable();
  }

  moveMade() {
    this.moveSubject.next({ payerXMadeMove: this.isPlayerXTurn() });
    this.isPlayerXTurn.set(!this.isPlayerXTurn());
  }
}
