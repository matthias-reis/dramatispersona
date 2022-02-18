import { Field } from './field';
import { play } from './play';
import { getPlayground } from './playground';
import { Stone } from './stone';

const playground = getPlayground();

const a1 = new Stone();
const a2 = new Stone();
const a3 = new Stone();
const a4 = new Stone();

const b1 = new Stone();
const b2 = new Stone();
const b3 = new Stone();
const b4 = new Stone();

//     01  02
//   03  04  05
//   06  07  08
// 09  10  11  12
// 13  14  15  16
//   17  18  19
//   20  21  22
//     23  24
playground[3].setStone(a1);
playground[4].stone = a2;
playground[5].stone = a3;
playground[7].stone = a4;

playground[24].stone = b1;
playground[22].stone = b2;
playground[19].stone = b3;
playground[16].stone = b4;

const result = play(playground);

console.log('result', result.join(' : '));
