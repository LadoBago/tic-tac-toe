import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { BoardComponent } from '../board/board.component';
import { ActivatedRoute, Params } from '@angular/router';
import { createSignal } from '@angular/core/primitives/signals';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [BoardComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent implements OnInit, OnDestroy {
  public boardSize! : number;
  private routerParams! : Subscription;

  constructor(private activatedRoute: ActivatedRoute) {
  }
  
  ngOnInit(): void {
    this.routerParams = this.activatedRoute.params.subscribe(params => {
      console.log(params);
      this.boardSize = params["boardSize"];
    });

    console.log("#2 GameComponent.boardSize=" + this.boardSize)
  }

  ngOnDestroy() : void {
    this.routerParams.unsubscribe();
  }
}
