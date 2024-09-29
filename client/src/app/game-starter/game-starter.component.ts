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
    return timeControlOptions.map(i => i * 1000);
  }

  selectBoardSize(boardSize: number) {
    this.gameStarter.BoardSize = boardSize;
  }

  selectTimeControl(timeControl: number) {
    this.gameStarter.TimeControl = timeControl;
  }
  
  onStartNewGame() {
    this.startNewGame.emit(this.gameStarter);
  }
}
