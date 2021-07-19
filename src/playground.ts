import { Field } from './field';

const playground: Field[] = [
  new Field('upwardPit', [], [1, 2], 0, 0),
  // ROW 1
  new Field('f10', [0], [3, 4], 1, 0),
  new Field('f11', [0], [4, 5], 1, 1),
  // ROW 2
  new Field('f20', [1], [6], 2, 0),
  new Field('f21', [1, 2], [7], 2, 1),
  new Field('f22', [2], [8], 2, 2),
  // ROW 3
  new Field('f30', [3], [9, 10], 3, 0),
  new Field('f31', [4], [10, 11], 3, 1),
  new Field('f32', [5], [11, 12], 3, 2),
  // ROW 4
  new Field('f40', [6], [13], 4, 0),
  new Field('f41', [6, 7], [14], 4, 1),
  new Field('f42', [7, 8], [15], 4, 2),
  new Field('f43', [8], [16], 4, 3),
  // ROW 5
  new Field('f50', [9], [17], 5, 0),
  new Field('f51', [10], [17, 18], 5, 1),
  new Field('f52', [11], [18, 19], 5, 2),
  new Field('f53', [12], [19], 5, 3),
  // ROW 6
  new Field('f60', [13, 14], [20], 6, 0),
  new Field('f61', [14, 15], [21], 6, 1),
  new Field('f62', [15, 16], [22], 6, 2),
  // ROW 7
  new Field('f70', [17], [23], 7, 0),
  new Field('f71', [18], [23, 24], 7, 1),
  new Field('f72', [19], [24], 7, 2),
];

export const getPlayground = () => [
  // get a freshly cloned playground
  ...playground.map((field) => ({ ...field })),
];
