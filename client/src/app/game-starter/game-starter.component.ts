import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { boardSizeOptions, timeControlOptions, GameStarterModel, GameModes } from './game-starter.model';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Player } from '../game/player.model';

@Component({
  selector: 'app-game-starter',
  standalone: true,
  imports: [DatePipe, FormsModule],
  templateUrl: './game-starter.component.html',
  styleUrl: './game-starter.component.css'
})
export class GameStarterComponent {
  private gameStarter: GameStarterModel;
  @Output() gameCreated = new EventEmitter<GameStarterModel>();

  constructor(private _userService: UserService) {
    this.gameStarter = new GameStarterModel();
  }

  get GameStarter(): GameStarterModel {
    return this.gameStarter;
  }

  getBoardSizeOptions() : number[] {
    return boardSizeOptions;
  }

  getTimeControlOptions() : number[] {
    return timeControlOptions.map(i => i * 1000);
  }

  selectBoardSize(boardSize: number) {
    this.gameStarter.BoardSize = boardSize;
  }

  selectTimeControl(timeControl: number) {
    this.gameStarter.TimeControl = timeControl;
  }

  selectPlayerIsX(playerIsX: boolean | undefined) {
    this.gameStarter.PlayerIsX = playerIsX;
  }

  onCreateGameHuman() {
    this.createGame(GameModes.Human);
  }

  onCreateGameBot() {
    this.createGame(GameModes.Bot);
  }

  private createGame(gameMode: GameModes) {
    this.gameStarter.GameMode = gameMode
    this._userService.setCurrentUser(Player.create(this.gameStarter.PlayerName));
    this.gameCreated.emit(this.gameStarter);
  }
}
