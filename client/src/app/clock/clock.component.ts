import { Component, input } from '@angular/core';
import { map, takeWhile, timer } from 'rxjs';
import { AsyncPipe, DatePipe} from '@angular/common'

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [AsyncPipe, DatePipe],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.css'
})
export class ClockComponent {
  time = input.required<number>();
  
  remainingMilliSeconds = timer(0, 1000)
    .pipe(
      map(x => (this.time() - x) * 1000),
      takeWhile(x => x >= 0)
    );
}
