import { AsyncPipe, DatePipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [AsyncPipe, DatePipe],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {
  time = input.required<number>();
  
  timerIsLessThenOneMinute = computed(() => this.time() < 60000);
}
