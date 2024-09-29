import { Component, computed, EventEmitter, input, Output } from '@angular/core';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [],
  templateUrl: './square.component.html',
  styleUrl: './square.component.css'
})
export class SquareComponent {
  indexI = input.required<number>();
  indexJ = input.required<number>();
  boardSize = input.required<number>();
  value = input<boolean | undefined>(undefined);

  isFirstRow = computed(() => this.indexI() === 0);
  isLastRow = computed(() => this.indexI() === this.boardSize() - 1);

  isFirstCol = computed(() => this.indexJ() === 0);
  isLastCol = computed(() => this.indexJ() === this.boardSize() - 1);

  isValueX = computed(() => this.value() === true);
  isValue0 = computed(() => this.value() === false);

  hasValue = computed(() => this.value() != undefined);

  @Output()
  moveMade = new EventEmitter<{i: number, j: number}>();

  constructor() {

  }

  onClick() {
    if (this.value() !== undefined)
      return;

    this.moveMade.emit({i: this.indexI(), j: this.indexJ()});
  }
}
