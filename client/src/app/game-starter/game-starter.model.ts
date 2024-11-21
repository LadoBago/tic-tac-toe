export const boardSizeOptions=[3,5];
export const timeControlOptions=[10,60,180,300];

export enum GameModes {
    Human,
    Bot
}

export class GameStarterModel {
    private playerName: string;
    private boardSize: number;
    private timeControl: number;
    private gameMode: GameModes;
    private playerIsX: boolean | undefined;

    constructor(){
        this.boardSize = boardSizeOptions[0];
        this.timeControl = timeControlOptions[1] * 1000;
        this.gameMode = GameModes.Human;
        this.playerIsX = undefined;
        this.playerName = "";
    }
    
    public set BoardSize(value: number) {
        this.boardSize = value;
    }

    public get BoardSize(): number {
        return this.boardSize;
    }

    public set TimeControl(value: number) {
        this.timeControl = value;
    }

    public get TimeControl(): number {
        return this.timeControl;
    }

    public set GameMode(value: GameModes) {
        this.gameMode = value;
    }

    public get GameMode(): GameModes {
        return this.gameMode;
    }

    public set PlayerIsX(value: boolean | undefined) {
        this.playerIsX = value;
    }

    public get PlayerIsX(): boolean | undefined {
        return this.playerIsX;
    }

    public get PlayerName(): string {
        return this.playerName;
    }
    public set PlayerName(value: string) {
        this.playerName = value;
    }

}