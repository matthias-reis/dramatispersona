import Color from 'color';

export const FONT_0 = '16px';
export const FONT_1 = '1.2rem';
export const FONT_2 = '1.5rem';
export const FONT_3 = '3rem';
export const FONT_4 = '4.5rem';
export const LINE_HEIGHT = '1.45';
export const TEXT_WIDTH = '35rem';

export const SPACE_XS = '0.25rem';
export const SPACE_S = '0.5rem';
export const SPACE_M = '1rem';
export const SPACE_L = '2rem';
export const SPACE_XL = '5rem';
export const SPACE_2XL = '10rem';

export const COL_NEUTRAL = '#666666';
export const COL_NEUTRAL_BRIGHT = '#eeeeee';

export const COL_TEXT_STRONGBRIGHT = Color('white').toString();
export const COL_TEXT_STRONGDARK = Color('black').toString();

export const COL_TEXT_BRIGHT = Color('white')
  .alpha(0.7)
  .toString();
export const COL_TEXT_DARK = Color('black')
  .alpha(0.7)
  .toString();

export const textColor = col =>
  Color(col).dark() ? COL_TEXT_BRIGHT : COL_TEXT_DARK;

export const textStrongColor = col =>
  Color(col).dark() ? COL_TEXT_STRONGBRIGHT : COL_TEXT_STRONGDARK;

export const createTheme = ([p, s]) => {
  const str = c => c.rgb().toString();

  const brightnesses = c => [
    str(c.darken(0.25)),
    str(c),
    str(c.lighten(0.2)),
    str(c.lighten(0.45)),
    str(c.lighten(0.7)),
    str(c.lighten(0.85))
  ];

  const colors = {
    p: Color(p).lightness(50),
    s: Color(s).lightness(50),
    pd: Color(p)
      .lightness(50)
      .desaturate(0.8),
    sd: Color(s)
      .lightness(50)
      .desaturate(0.8),
    n: Color(COL_NEUTRAL).lightness(50)
  };

  console.log(colors.p.lightness());
  console.log(colors.s.lightness());

  return {
    bg: (spectrum, brightness) => brightnesses(colors[spectrum])[brightness],
    text: (spectrum, brightness) =>
      textColor(brightnesses(colors[spectrum])[brightness]),
    strong: (spectrum, brightness) =>
      textStrongColor(brightnesses(colors[spectrum])[brightness])
  };
};
