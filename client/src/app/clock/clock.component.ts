import { Component, EventEmitter, input, OnInit, Output } from '@angular/core';
import { AsyncPipe, DatePipe} from '@angular/common'
import { TimerComponent } from "../timer/timer.component";
import { ClockService, TimerExpiredDataModel } from './clock.service';

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

  constructor(private clockService: ClockService) {
    clockService.OnTimeExpired.subscribe(this.OnTimeExpired);
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
    this.timeExpired.emit(data);
  }

}
