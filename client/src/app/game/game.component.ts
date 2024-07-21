import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BoardComponent } from '../board/board.component';
import { Game } from './game.model';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [BoardComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {

  @Input() public game! : Game;
  @Output() public finish: EventEmitter<void>;

  constructor() {
    this.finish = new EventEmitter<void>();
  }
  onFinish() {
      this.finish.emit();
  }
}
