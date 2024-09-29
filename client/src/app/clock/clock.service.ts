import { Injectable, signal } from '@angular/core';
import { MoveTrackerService } from '../services/move-tracker.service';
import { interval, Observable, Subject, Subscription } from 'rxjs';

export type TimerExpiredDataModel = { playerXTimeExpired: boolean };

@Injectable({
  providedIn: 'root'
})
export class ClockService {
  playerXTime = signal<number>(0);
  player0Time = signal<number>(0);

  private static dec(i: number): ((v: number) => number) { return (v) => v - i };
  private timerSubscribtion?: Subscription;
  private timerExpiredSubject: Subject<TimerExpiredDataModel>

  constructor(private moveTrackerService: MoveTrackerService) {
    this.timerExpiredSubject = new Subject();
  }

  get OnTimeExpired(): Observable<TimerExpiredDataModel> {
    return this.timerExpiredSubject.asObservable();
  }
  setInitialTime(initialTime: number) {
    this.playerXTime.set(initialTime);
    this.player0Time.set(initialTime);
  }

  start() {
    const refreshInterval = 173;
    this.timerSubscribtion = interval(refreshInterval).subscribe(v => {
      if (this.moveTrackerService.IsPlayerXTurn) {
        this.playerXTime.update(ClockService.dec(refreshInterval));
        if (!this.checkTimer(this.playerXTime(), true)) {

        }
      }
      else {
        this.player0Time.update(ClockService.dec(refreshInterval));
        if (!this.checkTimer(this.player0Time(), false)) {

        }
      }
    });
  }

  finish() {
    if (this.timerSubscribtion) {
      this.timerSubscribtion.unsubscribe();
    }
  }

  private checkTimer(remainingTime: number, isPlayerX: boolean): boolean {
    if (remainingTime <= 0) {
      this.timerExpiredSubject.next({playerXTimeExpired: isPlayerX});
      this.timerExpiredSubject.complete();
      return false;
    }

    return true;
  }

}
