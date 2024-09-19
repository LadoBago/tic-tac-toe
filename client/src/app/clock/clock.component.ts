import { Component, input, OnInit } from '@angular/core';
import { map, takeWhile, timer } from 'rxjs';
import { AsyncPipe, DatePipe} from '@angular/common'
import { TimerComponent } from "../timer/timer.component";
import { ClockService } from './clock.service';
import { MoveDataModel, MoveTrackerService } from '../services/move-tracker.service';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [AsyncPipe, DatePipe, TimerComponent],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.css'
})
export class ClockComponent implements OnInit {
  time = input.required<number>();

  constructor(private clockService: ClockService) {
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

}
