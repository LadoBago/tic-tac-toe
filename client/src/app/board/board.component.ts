import { Component, Input, OnInit } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent implements OnInit {
  @Input() size! : number;

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
    console.log(this.size)
    return this.boardIndexes;
  }

  public makeMove(row: number, col: number){
    if (this.position[row * this.size + col] != undefined)
      return;

    this.position[row * this.size + col] = this.nextMove;
    this.nextMove = !this.nextMove;
  }
}
