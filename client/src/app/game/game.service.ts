import { computed, Injectable, signal } from '@angular/core';
import { ClockService } from '../clock/clock.service';
import { Game } from './game.model';
import { GameStarterModel } from '../game-starter/game-starter.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  game = signal<Game | undefined>(undefined);

  constructor(private clockService: ClockService) {

  }

  isCreated = computed(() => this.game() !== undefined);

  startNewGame(gameStarter: GameStarterModel) {
    this.game.set(new Game(gameStarter));
    this.clockService.start();
  }

  finishGame() {
    this.game.set(undefined);
    this.clockService.finish();
  }

}