export const CHANGE_THEME = 'CHANGE_THEME';

/* - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
- Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
- Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
- Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
- Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
- White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)*/

export const themes = {
  light: {
    status: 'light',
    elementBg: "hsl(0, 0%, 100%)",
    bodyBg: "hsl(0, 0%, 98%)",
    textColor: 'hsl(200, 15%, 8%)',
    // inputBg: 'hsl(0, 0%, 52%)',
  },
  dark: {
    status: 'dark',
    elementBg: "hsl(209, 23%, 22%)",
    bodyBg: "hsl(207, 26%, 17%)",
    textColor: 'hsl(0, 0%, 100%)',
    // inputBg: 'hsl(209, 23%, 22%)',
  }
};

export const changeTheme = (which) => ({
  type: CHANGE_THEME,
  payload: themes[which],
});

