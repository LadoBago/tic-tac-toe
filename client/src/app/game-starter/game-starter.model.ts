export const boardSizeOptions=[3,5];
export const timeControlOptions=[1,3,5];

export class GameStarterModel {
    private boardSize: number;
    private timeControl: number;

    constructor(){
        this.boardSize = boardSizeOptions[0];
        this.timeControl = timeControlOptions[0];
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

}