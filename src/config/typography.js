import Typography from 'typography';
import { FONT_0, LINE_HEIGHT } from './style';

const typography = new Typography({
  baseFontSize: FONT_0,
  baseLineHeight: LINE_HEIGHT,
  scaleRatio: 2.2,
  headerFontFamily: ['Playfair Display', 'serif'],
  bodyFontFamily: ['Dosis', 'sans-serif'],
  bodyGray: 50,
  bodyWeight: '400',
  googleFonts: [
    {
      name: 'Playfair Display',
      styles: ['400', '700']
    },
    {
      name: 'Dosis',
      styles: ['300', '400', '700']
    }
  ]
});

export default typography;
