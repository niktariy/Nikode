import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type Theme = 'os-default' | 'light' | 'dark';

interface ThemeState {
  currentTheme: Theme;
}

const getInitialTheme = (): Theme => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'os-default' || savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme;
  }
  return 'os-default';
};

const initialState: ThemeState = {
  currentTheme: getInitialTheme(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state: ThemeState, action: PayloadAction<Theme>) => {
      state.currentTheme = action.payload;
      localStorage.setItem('theme', action.payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer; 