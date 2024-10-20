import { Component, EventEmitter, input, OnInit, Output } from '@angular/core';
import { AsyncPipe, DatePipe} from '@angular/common'
import { TimerComponent } from "../timer/timer.component";
import { ClockService, TimerExpiredDataModel } from './clock.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [AsyncPipe, DatePipe, TimerComponent],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.css'
})
export class ClockComponent implements OnInit {
  time = input.required<number>();
  @Output() timeExpired = new EventEmitter<TimerExpiredDataModel>();
  timeExpiredSubscription: Subscription;

  constructor(private clockService: ClockService) {
    this.timeExpiredSubscription = clockService.OnTimeExpired.subscribe(this.OnTimeExpired2(this.timeExpired));
  }

  ngOnInit(): void {
    this.clockService.setInitialTime(this.time());
  }

  get playerXTime() : number {
    return this.clockService.playerXTime();
  }

  get player0Time() : number {
    return this.clockService.player0Time();
  }

  OnTimeExpired(data: TimerExpiredDataModel) {
    console.log('clockComponent: Time expired')
    console.log(data);
    console.log(this);
    this.timeExpired.emit(data);
    this.timeExpiredSubscription.unsubscribe();
  }

  OnTimeExpired2(ee: EventEmitter<TimerExpiredDataModel>): (value: TimerExpiredDataModel) => void {
    return (value: TimerExpiredDataModel) => {
      ee.emit(value);
      this.timeExpiredSubscription.unsubscribe();
    }
  }

}
