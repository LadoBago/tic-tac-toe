import { Component, EventEmitter, Output } from '@angular/core';
import { boardSizeOptions, timeControlOptions, GameStarterModel } from './game-starter.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-game-starter',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './game-starter.component.html',
  styleUrl: './game-starter.component.css'
})
export class GameStarterComponent {
  private gameStarter: GameStarterModel;
  @Output() startNewGame = new EventEmitter<GameStarterModel>();

  constructor() {
    this.gameStarter = new GameStarterModel();
  }

  get GameStarter(): GameStarterModel {
    return this.gameStarter;
  }

  getBoardSizeOptions() : number[]{
    return boardSizeOptions;
  }

  getTimeControlOptions() : number[]{
    return timeControlOptions;
  }

  selectBoardSize(boardSize: number) {
    this.gameStarter.BoardSize = boardSize;
    console.log ('Select boardSize ' + boardSize);
    console.log(this.gameStarter);
  }
  selectTimeControl(timeControl: number) {
    this.gameStarter.TimeControl = timeControl;
    console.log ('Select timeControl ' + timeControl);
    console.log(this.gameStarter);
  }
  onStartNewGame() {
    console.log ('Start new game');
    console.log(this.gameStarter);
    this.startNewGame.emit(this.gameStarter);
  }
}
