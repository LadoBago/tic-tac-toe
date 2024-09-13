import { Component, Input, OnInit } from '@angular/core';
import { SquareComponent } from "../square/square.component";

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [SquareComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent implements OnInit {
  @Input()
  size! : number;

  public position! : (boolean | undefined)[];
  private nextMove : boolean;
  private boardIndexes! : number[];

  constructor() { 
    this.nextMove = true;
  }

  public getNextMove() : boolean {
    return this.nextMove;
  }

  ngOnInit(): void {
    this.position = Array<boolean | undefined>(this.size * this.size).fill(undefined);
    this.boardIndexes = [...Array(this.size)].map((_, inx) => inx);
  }

  public getBoardIndexes() {
    return this.boardIndexes;
  }

  public onMakeMove(data: {i: number, j: number}){
    console.log('onMakeMove called');
    console.log(data);
    if (this.position[data.i * this.size + data.j] != undefined)
      return;

    console.log(this.position);

    this.position[data.i * this.size + data.j] = this.nextMove;
    this.nextMove = !this.nextMove;
  }
}
