import { v4 as uuidv4 } from 'uuid';
import { GameModes, GameStarterModel } from '../game-starter/game-starter.model';

export class Game {
    private boardSize: number;
    private id?: string
    private timeControl: number;
    private gameMode: GameModes;

    constructor(gameStarter: GameStarterModel ){
        this.boardSize = gameStarter.BoardSize
        this.timeControl = gameStarter.TimeControl;
        this.gameMode = gameStarter.GameMode;
    }

    Start() {
        this.id = uuidv4().toString();
    }

    Finish() {
        return;
    }

    set BoardSize(value: number) {
        this.boardSize = value;
    }

    get BoardSize(): number {
        return this.boardSize;
    }

    set TimeControl(value: number) {
        this.timeControl = value;
    }

    get TimeControl(): number {
        return this.timeControl;
    }
    get Id(): string {
        if (!this.id) {
            throw new Error("The game is not started yet.");
        }
        return this.id;
    }
    
    get IsStarted(): boolean {
        return this.id != undefined;
    }

    get GameMode(): GameModes {
        return this.gameMode
    }
}
