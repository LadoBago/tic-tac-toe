import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { GameComponent } from './game/game.component';
import { boardSizeOptions, Game, timeControlOptions } from './game/game.model';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, GameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tictactoe';
  gameSelected: Game;

  constructor() {
    this.gameSelected = new Game();
  }

  getBoardSizeOptions() : number[]{
    return boardSizeOptions;
  }

  getTimeControlOptions() : number[]{
    return timeControlOptions;
  }
  selectBoardSize(boardSize: number) {
    this.gameSelected.BoardSize = boardSize;
    console.log ('Select boardSize ' + boardSize);
    console.log(this.gameSelected);
  }
  selectTimeControl(timeControl: number) {
    this.gameSelected.TimeControl = timeControl;
    console.log ('Select timeControl ' + timeControl);
    console.log(this.gameSelected);
  }
  startNewGame() {
    this.gameSelected.Start();
    console.log ('Start new game');
    console.log(this.gameSelected);
  }
  onGameFinish() {
    this.gameSelected = new Game();
    console.log ('Finish game.');
  }
}
