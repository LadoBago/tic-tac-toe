import { Component, EventEmitter, input, Output } from '@angular/core';
import { BoardComponent } from '../board/board.component';
import { Game } from './game.model';
import { ClockComponent } from '../clock/clock.component';
import { GameService } from './game.service';
import { TimerExpiredDataModel } from '../clock/clock.service';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [BoardComponent, ClockComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  @Output() public finish: EventEmitter<void>;

  get CurrentGame(): Game {
    return this.gameService.game()!;
  }

  constructor(private gameService: GameService) {
    this.finish = new EventEmitter<void>();
  }
  onFinish() {
      this.finishGame();
  }

  OnTimeExpired($event: TimerExpiredDataModel) {
    this.finishGame();
  }

  private finishGame() {
    this.finish.emit();
  }
}
