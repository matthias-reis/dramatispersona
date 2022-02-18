import { gaussTight, nearZero } from './dice';
import { Playground } from './playground';
import { Stone } from './stone';
import { Direction } from './types';

const spreadJuice = (availableJuice: number) => {
  const spread = [nearZero(3), 1 - nearZero(3), 1 - nearZero(3)];
  const sum = spread.reduce((a, b) => a + b, 0);
  const spreadShare = spread.map((s) => s / sum);
  return spreadShare.map((s) => s * availableJuice);
};

const stray = (value: number, min: number, max: number) => {
  const seed = gaussTight(1);
  console.log({ seed });
  if (seed <= 1) {
    return min + (value - min) * seed;
  } else {
    return (seed - 1) * (max - value) + value;
  }
};

export class Field {
  id: string;
  nextUp: number[];
  nextDown: number[];
  row: number;
  col: number;
  status: [number, number][] = [];
  stone: Stone | null = null;
  current: [number, number] = [0, 0];

  constructor(
    id: string,
    nextUp: number[],
    nextDown: number[],
    row: number,
    col: number
  ) {
    this.clear();
    this.id = id;
    this.nextUp = nextUp;
    this.nextDown = nextDown;
    this.row = row;
    this.col = col;
  }

  public clone(): Field {
    return new Field(this.id, this.nextUp, this.nextDown, this.row, this.col);
  }
  public setStone(stone: Stone) {
    this.stone = stone;
  }
  public fillOffensiveJuice() {
    if (this.stone) {
      this.status.push([this.stone.offensiveJuice, 0]);
    } else {
      this.status.push([0, 0]);
    }
  }
  public fillDefensiveJuice() {
    if (this.stone) {
      this.status.push([0, this.stone.defensiveJuice]);
    } else {
      this.status.push([0, 0]);
    }
  }
  public clear() {
    this.status = [];
  }
  public moveJuice(playground: Playground, direction: Direction) {
    const availableJuice = this.status[this.status.length - 1]?.[0] ?? 0;
    const [remainingJuice, leftJuice, rightJuice] = spreadJuice(availableJuice);
    this.current[0] += remainingJuice;
    const next = direction === 'down' ? this.nextDown : this.nextUp;
    if (next.length === 1) {
      playground[next[0]].current[0] = leftJuice + rightJuice;
    } else if (next.length === 2) {
      playground[next[0]].current[0] = leftJuice;
      playground[next[1]].current[0] = rightJuice;
    }
  }

  battle() {
    const newStatus: [number, number] = [0, 0];
    if (this.current[0] === 0) {
      //if there's no offense, the defense stays strong
      newStatus[1] = this.current[1];
    } else if (this.current[1] === 0) {
      //if there's no defens, the offense just slips through
      newStatus[0] = this.current[0];
    } else {
      let offenseBaseline = this.current[0] - this.current[1];
      if (offenseBaseline < 0) {
        offenseBaseline = 0;
      }

      let defenseBaseline = this.current[1] - this.current[0];
      if (defenseBaseline < 0) {
        defenseBaseline = 0;
      }

      newStatus[0] = stray(offenseBaseline, 0, this.current[0]);
      newStatus[1] = stray(defenseBaseline, 0, this.current[1]);
    }
    this.status.push(newStatus);
  }

  get result() {
    return `${this.id} ${this.stone ? '*' : ' '} ==> ${this.status
      .slice(-1)[0]
      ?.map((v) => v.toFixed(2))
      .join(' : ')}`;
  }
  get hasOffensiveJuice() {
    return this.status.slice(-1)[0][0] > 0;
  }
}
