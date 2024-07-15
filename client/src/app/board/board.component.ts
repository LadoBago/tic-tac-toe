import { Component, Input, OnInit } from '@angular/core';
import { SquareComponent } from '../square/square.component';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [SquareComponent, NgFor, NgClass],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent implements OnInit {
  @Input() size : number;

  public position : (boolean | undefined)[];
  private nextMove : boolean;

  constructor() { 
    this.size = 3;
    this.nextMove = true;
    this.position = Array<boolean | undefined>(this.size * this.size).fill(undefined);
  }

  public getNextMove() : boolean {
    return this.nextMove;
  }

  ngOnInit(): void {
    this.position = Array<boolean | undefined>(this.size * this.size).fill(undefined);
  }

  public getBoardIndexes() {
    return [...Array(this.size)].map((_, inx) => inx);
  }

  public makeMove(row: number, col: number){
    if (this.position[row * this.size + col] != undefined)
      return;

    this.position[row * this.size + col] = this.nextMove;
    this.nextMove = !this.nextMove;
  }
}
