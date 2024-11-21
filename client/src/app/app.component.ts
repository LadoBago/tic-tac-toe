import { Component, Signal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameComponent } from './game/game.component';
import { Game } from './game/game.model';
import { GameStarterComponent } from "./game-starter/game-starter.component";
import { GameStarterModel } from './game-starter/game-starter.model';
import { GameService } from './game/game.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GameComponent, GameStarterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tictactoe';

  get isCreated(): Signal<boolean> {
    return this.gameService.isCreated;
  }

  constructor(private gameService: GameService) {
  }

  onGameFinish() {
    this.gameService.finishGame();
  }
  onGameCreated($event: GameStarterModel) {
    this.gameService.createGame($event);
  }
}
