import { Component, Input } from '@angular/core';
import { BoardComponent } from '../board/board.component';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [],
  templateUrl: './square.component.html',
  styleUrl: './square.component.css'
})
export class SquareComponent {
  @Input() row: number | undefined;
  @Input() col: number | undefined;
  @Input() isFirstRow: boolean | undefined;
  @Input() isFirstCol: boolean | undefined;
  @Input() isLastRow: boolean | undefined;
  @Input() isLastCol: boolean | undefined;
  @Input() value : boolean | undefined;
  @Input() parent : BoardComponent | undefined;

  constructor(){
  }

  onClick(){
    if (this.value != undefined)
      return;

    this.parent?.makeMove(this.row!, this.col!);
    console.log(this.row + '-' + this.col + ' clicked');
  }
}
