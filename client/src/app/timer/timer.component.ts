import { AsyncPipe, DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { map, takeWhile, timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [AsyncPipe, DatePipe],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {
  time = input.required<number>();
  
  remainingMilliSeconds = timer(0, 1000)
    .pipe(
      map(x => (this.time() - x) * 1000),
      takeWhile(x => x >= 0)
    );
}
