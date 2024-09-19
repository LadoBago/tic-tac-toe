import { Injectable, signal } from '@angular/core';
import { MoveDataModel, MoveTrackerService } from '../services/move-tracker.service';
import { interval, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClockService {
  playerXTime = signal<number>(0);
  player0Time = signal<number>(0);

  private static dec(i: number): ((v: number) => number) { return (v) => v - i };
  private timerSubscribtion?: Subscription;


  constructor(private moveTrackerService: MoveTrackerService) {
    this.moveTrackerService.OnMove.subscribe(this.onMove);
  }

  setInitialTime(initialTime: number) {
    this.playerXTime.set(initialTime);
    this.player0Time.set(initialTime);
  }

  start() {
    this.timerSubscribtion = interval(1000).subscribe(v => {
      if (this.moveTrackerService.IsPlayerXTurn) {
        this.playerXTime.update(ClockService.dec(1));
      }
      else {
        this.player0Time.update(ClockService.dec(1));
      }
    });
  }

  finish() {
    console.log("ClockService.finish")
    if (this.timerSubscribtion) {
      console.log("ClockService.timerSubscribtion.unsubscribe")
      this.timerSubscribtion.unsubscribe();
    }

  }

  onMove(data: MoveDataModel) {

  }
}
