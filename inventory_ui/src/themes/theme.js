// When we create theme or add new theme we'll add these here
export const theme = {
  fg: 'palevioletred',
  bg: 'white',
};

// This theme swaps `fg` and `bg`
export const invertTheme = ({ fg, bg }) => ({
  fg: bg,
  bg: fg,
});

export default theme;
