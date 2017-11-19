import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '17px',
  baseLineHeight: 1.45,
  scaleRatio: 2.2,
  bodyFontFamily: ['Dosis', 'sans-serif'],
  headerFontFamily: ['Dosis', 'sans-serif'],
  bodyGray: 50,
  bodyWeight: '400',
  googleFonts: [
    {
      name: 'Dosis',
      styles: ['300', '400', '700']
    }
  ]
});

export default typography;
