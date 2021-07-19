import { gaussTight as func } from './dice';
const REPEAT = 20;

const test = () => {
  const resultSet: number[] = [];

  for (let i = 0; i <= REPEAT; i++) {
    resultSet.push(Math.round(func(100)));
  }

  console.log(resultSet.join(' | '));
};

test();
