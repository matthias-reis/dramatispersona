const logVol = (id, vol) =>
  console.log(id, (vol / 1e12).toFixed(2), 'Bio. ly^3');

const logCount = (id, n) => console.log(id, (n / 1e9).toFixed(2), 'Mrd.');
const logYears = (id, n) => console.log(id, (n / 1e6).toFixed(2), 'Mio. years');

const dens_0 = 500 / 34.5;
const dens_1 = 500 / 34.5;
const dens_3 = 500 / 34.5;
const pi = Math.PI;

const vol_0 = 4 / 3 * pi * 8000 ** 3;
const vol_1_real = 42000 ** 2 * pi * 12000 - 8000 ** 2 * pi * 12000;
const vol_1_model = 4 / 3 * pi * 42000 ** 3 - vol_0;
const vol_2_real = 50000 ** 2 * pi * 8000 - 42000 ** 2 * pi * 8000;
const vol_2_model = 4 / 3 * pi * 50000 ** 3 - vol_1_model - vol_0;

logVol('v0', vol_0);
logVol('v1r', vol_1_real);
logVol('v1m', vol_1_model);
logVol('v2r', vol_2_real);
logVol('v2m', vol_2_model);

const density_0 = 0.07;
const density_1 = 0.003;
const density_2 = 0.001;

const stars_0 = vol_0 * density_0;

logCount('s0', stars_0);
logCount('s1', vol_1_real * density_1);
logCount('s2', vol_2_real * density_2);
logCount(
  'sum real',
  vol_0 * density_0 + vol_1_real * density_1 + vol_2_real * density_2
);

const stars_1 = vol_1_model * density_1;
const stars_2 = vol_2_model * density_2;

const sum_model = stars_0 + stars_1 + stars_2;

logCount('s0', stars_0);
logCount('s1m', stars_1);
logCount('s2m', stars_2);
logCount('sum model', sum_model);

console.log('- - -');

const exploration_range = 15;

const relation = radius => radius / (3 * exploration_range);

console.log('100', relation(100).toFixed(3));
console.log('1000', relation(1000).toFixed(3));
console.log('2000', relation(2000).toFixed(3));
console.log('10000', relation(10000).toFixed(3));

const radius_milkyway = 50000;

console.log('full relation', relation(radius_milkyway).toFixed(3));

const average_relation = 2 / relation(50000);
const average_growth = 1 + average_relation;

console.log('average growth', average_growth);

console.log('- - -');

const iterations = Math.log(sum_model) / Math.log(average_growth);

console.log('iterations', iterations.toFixed(2));
logYears('YEARS', iterations * 1000);
