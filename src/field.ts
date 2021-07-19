import { Stone } from './types';

export class Field {
  id: string;
  nextUp: number[];
  nextDown: number[];
  row: number;
  col: number;
  juiceDefense: number = 0;
  juiceOffense: number = 0;
  stone: Stone | null = null;

  constructor(
    id: string,
    nextUp: number[],
    nextDown: number[],
    row: number,
    col: number
  ) {
    this.id = id;
    this.nextUp = nextUp;
    this.nextDown = nextDown;
    this.row = row;
    this.col = col;
  }
  clone(): Field {
    return new Field(this.id, this.nextUp, this.nextDown, this.row, this.col);
  }
}
