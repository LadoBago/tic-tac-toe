import { Injectable, signal, WritableSignal } from '@angular/core';
import { MoveTrackerService } from '../services/move-tracker.service';
import { interval, Observable, Subject, Subscription, takeUntil } from 'rxjs';

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
    this.timerExpiredSubject = new Subject<TimerExpiredDataModel>();
  }

  get OnTimeExpired(): Observable<TimerExpiredDataModel> {
    return this.timerExpiredSubject.asObservable();
  }
  setInitialTime(initialTime: number) {
    this.playerXTime.set(initialTime);
    this.player0Time.set(initialTime);
  }

  start() {
    const refreshInterval = 73;
    this.timerSubscribtion = interval(refreshInterval).pipe(takeUntil(this.timerExpiredSubject)).subscribe(v => {
      let isPlayerX = this.moveTrackerService.IsPlayerXTurn;
      let playerTime = isPlayerX? this.playerXTime : this.player0Time;
      playerTime.update(ClockService.dec(refreshInterval));
      
      if (playerTime() <= 0) {
        this.timerExpiredSubject.next({ playerXTimeExpired: isPlayerX });
        this.finish()
      }
    });
  }

  finish() {
    if (this.timerSubscribtion) {
      this.timerSubscribtion.unsubscribe();
    }
  }

}
