import { Component, Input, OnInit } from '@angular/core';
import { SquareComponent } from "../square/square.component";
import { MoveTrackerService } from "../services/move-tracker.service"

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
  private boardIndexes! : number[];

  constructor(private moveTrackerService: MoveTrackerService) {
  }

  private get NextMove() : boolean {
    return this.moveTrackerService.IsPlayerXTurn;
  }

  ngOnInit(): void {
    this.position = Array<boolean | undefined>(this.size * this.size).fill(undefined);
    this.boardIndexes = [...Array(this.size)].map((_, inx) => inx);
  }

  public getBoardIndexes() {
    return this.boardIndexes;
  }

  public onMove(data: {i: number, j: number}){
    console.log('onMove called');
    console.log(data);
    if (this.position[data.i * this.size + data.j] != undefined)
      return;

    console.log(this.position);

    this.position[data.i * this.size + data.j] = this.NextMove;
    this.moveTrackerService.moveMade();
  }
}
