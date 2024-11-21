import { v4 as uuidv4 } from 'uuid';

export class Player {
    private _id: string;
    public get id(): string {
        return this._id;
    }

    private _name: string;
    public get name(): string {
        return this._name;
    }

    public constructor(name: string) {
        this._id = uuidv4().toString();
        this._name = name;
    }

    public static create(name: string) {
        return new Player(name);
    }

    public equals(player: Player): boolean {
        return this._id === player._id;
    }
}
