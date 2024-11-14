export const boardSizeOptions=[3,5];
export const timeControlOptions=[10,60,180,300];

export enum GameModes {
    Human,
    Bot
}

export class GameStarterModel {
    private boardSize: number;
    private timeControl: number;
    private gameMode: GameModes;
    public GameModesEnum = GameModes;

    constructor(){
        this.boardSize = boardSizeOptions[0];
        this.timeControl = timeControlOptions[1] * 1000;
        this.gameMode = GameModes.Human;
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

    set GameMode(value: GameModes) {
        this.gameMode = value;
    }

    get GameMode(): GameModes {
        return this.gameMode;
    }

}