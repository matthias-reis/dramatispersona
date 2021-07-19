import { curry } from 'ramda';

/**
 * abstracted into a function - as in the future,
 * we might switch to a more sophisticated generator
 */
const rnd = () => Math.random();

const easeInOut = (p: number, t: number) =>
  t < 0.5
    ? -0.5 * Math.pow(2 * (0.5 - t), p) + 0.5
    : 0.5 * Math.pow(2 * (t - 0.5), p) + 0.5;

export const gauss = curry((tightness: number, center: number): number => {
  //tightness not yet covered
  const max = center * 2;
  return easeInOut(tightness, rnd()) * max;
});

export const gaussLoose = gauss(1.8);
export const gaussStandard = gauss(2.5);
export const gaussTight = gauss(4);
