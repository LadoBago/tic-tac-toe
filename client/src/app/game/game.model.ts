import { v4 as uuidv4 } from 'uuid';

export const boardSizeOptions=[3,5];
export const timeControlOptions=[1,3,5];

export class Game {
    private boardSize: number;
    private id?: string
    private timeControl: number;

    constructor(){
        this.boardSize = boardSizeOptions[0];
        this.timeControl = timeControlOptions[0];
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

}