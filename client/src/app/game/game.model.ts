import { v4 as uuidv4 } from 'uuid';
import { GameModes, GameStarterModel } from '../game-starter/game-starter.model';
import { Player } from './player.model';

export class Game {
    private boardSize: number;
    private id?: string
    private timeControl: number;
    private gameMode: GameModes;
    private playerX?: Player;
    private player0?: Player;

    private constructor(gameStarter: GameStarterModel){
        this.boardSize = gameStarter.BoardSize
        this.timeControl = gameStarter.TimeControl;
        this.gameMode = gameStarter.GameMode;
        if(gameStarter.PlayerIsX) {
            this.playerX = Player.create(gameStarter.PlayerName);
        }
        else {
            this.player0 = Player.create(gameStarter.PlayerName);
        }
    }

    static create(gameStarter: GameStarterModel) {
        return new Game(gameStarter);
    }

    Start() {
        this.id = uuidv4().toString();
    }

    Finish() {
        return;
    }

    get BoardSize(): number {
        return this.boardSize;
    }

    get TimeControl(): number {
        return this.timeControl;
    }
    get Id(): string {
        if (!this.id) {
            throw new Error("The game is not created yet.");
        }
        return this.id;
    }
    
    get IsCreated(): boolean {
        return this.id != undefined;
    }

    get GameMode(): GameModes {
        return this.gameMode
    }
}