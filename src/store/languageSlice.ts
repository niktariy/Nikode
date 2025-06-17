import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface LanguageState {
  currentLanguage: 'en' | 'ru';
}

const getInitialLanguage = (): 'en' | 'ru' => {
  const savedLanguage = sessionStorage.getItem('i18nextLng');
  if (savedLanguage === 'en' || savedLanguage === 'ru') {
    return savedLanguage;
  }
  return 'ru'; // Default to Russian
};

const initialState: LanguageState = {
  currentLanguage: getInitialLanguage(),
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state: LanguageState, action: PayloadAction<'en' | 'ru'>) => {
      state.currentLanguage = action.payload;
      sessionStorage.setItem('i18nextLng', action.payload);
    },
    toggleLanguage: (state: LanguageState) => {
      state.currentLanguage = state.currentLanguage === 'en' ? 'ru' : 'en';
      sessionStorage.setItem('i18nextLng', state.currentLanguage);
    },
  },
});

export const { setLanguage, toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer; 