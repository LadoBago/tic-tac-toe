import { Injectable } from '@angular/core';
import { Player } from '../game/player.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _currentUser: Player | undefined;
  public get currentUser(): Player | undefined {
    return this._currentUser;
  }

  constructor() { }

  setCurrentUser(currentUser: Player) {
    this._currentUser = currentUser;
  }
}
