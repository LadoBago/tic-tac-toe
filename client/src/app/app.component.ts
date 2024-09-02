import { Component, Signal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameComponent } from './game/game.component';
import { Game } from './game/game.model';
import { GameStarterComponent } from "./game-starter/game-starter.component";
import { GameStarterModel } from './game-starter/game-starter.model';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GameComponent, GameStarterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tictactoe';
  private currentGame = signal<Game | undefined>(undefined);

  get CurrentGame(): Signal<Game | undefined> {
    return this.currentGame;
  }

  constructor() {
  }

  onGameFinish() {
    this.currentGame.set(undefined);
    console.log ('Finish game.');
  }
  onStartNewGame($event: GameStarterModel) {
    this.currentGame.set(new Game($event));
  }
}
