import { Playground } from './playground';
import { Direction } from './types';

const init = (playground: Playground, direction: Direction) => {
  const upperHalf = playground.slice(0, 12);
  const lowerHalf = playground.slice(13, 25);
  // first step: extract the right juice from each stone
  playground.forEach((field) => field.clear());
  (direction === 'down' ? upperHalf : lowerHalf).forEach((field) => {
    field.fillOffensiveJuice();
  });
  (direction === 'down' ? lowerHalf : upperHalf).forEach((field) => {
    field.fillDefensiveJuice();
  });
};

const hasJuice = (playground: Playground) => {
  return playground.slice(1, 24).some((field) => field.hasOffensiveJuice);
};

const playStep = (playground: Playground, direction: Direction) => {
  // first we move the juice
  playground.forEach((field) => field.moveJuice(playground, direction));
  // then we battle
  playground.forEach((field) => field.battle());
};

const playLeg = (playground: Playground, direction: Direction) => {
  // first step: extract juice from each stone
  init(playground, direction);
  while (hasJuice(playground)) {
    playground.forEach((field) => console.log(field.result));
    playStep(playground, direction);
  }

  return direction === 'down'
    ? playground[25].current[0]
    : playground[0].current[0];
};

export const play = (playground: Playground) => {
  console.log('===>> DOWN <<===');
  const downwardResult = playLeg(playground, 'down');
  console.log('===>> UP <<===');
  const upwardResult = playLeg(playground, 'up');
  return [downwardResult, upwardResult];
};
