import type { Tab } from '@/entities/tab';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface TabFormState {
  tabTitle: string;
  tabSubtitle: string;
  tabNotesText: string;
  isTabTitleError: boolean;
  isTabSubtitleError: boolean;
  isTabNotesTextError: boolean;
  tempo: number;
  wasSave: boolean;
  tabTitleHelperText: string;
  tabSubtitleHelperText: string;
  tabNotesTextHelperText: string;
}

const tabFormInitialState: TabFormState = {
  tabTitle: '',
  tabSubtitle: '',
  tabNotesText: '',
  isTabTitleError: false,
  isTabSubtitleError: false,
  isTabNotesTextError: false,
  tempo: 67,
  wasSave: false,
  tabTitleHelperText: 'Хорошее название упрощает поиск табулатуры',
  tabSubtitleHelperText: 'Можете указать автора',
  tabNotesTextHelperText: '',
};

const tabFormSlice = createSlice({
  name: 'tab-form-slice',
  initialState: tabFormInitialState,

  reducers: {
    setTabTitle: (state, action: PayloadAction<string>) => {
      state.tabTitle = action.payload;
    },
    setTabSubtitle: (state, action: PayloadAction<string>) => {
      state.tabSubtitle = action.payload;
    },
    setTabNotesText: (state, action: PayloadAction<string>) => {
      state.tabNotesText = action.payload;
    },
    setIsTabTitleError: (state, action: PayloadAction<boolean>) => {
      state.isTabTitleError = action.payload;
    },
    setIsTabSubtitleError: (state, action: PayloadAction<boolean>) => {
      state.isTabSubtitleError = action.payload;
    },
    setIsTabNotesTextError: (state, action: PayloadAction<boolean>) => {
      state.isTabNotesTextError = action.payload;
    },
    setTempo: (state, action: PayloadAction<number>) => {
      state.tempo = action.payload;
    },
    setWasSave: (state, action: PayloadAction<boolean>) => {
      state.wasSave = action.payload;
    },
    setTabTitleHelperText: (state, action: PayloadAction<string>) => {
      state.tabTitleHelperText = action.payload;
    },
    setTabSubtitleHelperText: (state, action: PayloadAction<string>) => {
      state.tabSubtitleHelperText = action.payload;
    },
    setTabNotesTextHelperText: (state, action: PayloadAction<string>) => {
      state.tabNotesTextHelperText = action.payload;
    },

    resetForm: () => {
      return tabFormInitialState;
    },

    loadDataInFormFromTab: (state, action: PayloadAction<Tab>) => {
      const { title, subtitle, tempo, notesText } = action.payload;

      state.tabTitle = title;
      state.tabSubtitle = subtitle ?? state.tabSubtitle;
      state.tempo = tempo ?? state.tempo;
      state.tabNotesText = notesText;
    },
  },
});

export const {
  setTabTitle,
  setTabSubtitle,
  setTabNotesText,
  setIsTabTitleError,
  setIsTabSubtitleError,
  setIsTabNotesTextError,
  setTempo,
  setWasSave,
  setTabTitleHelperText,
  setTabSubtitleHelperText,
  setTabNotesTextHelperText,
  resetForm,
  loadDataInFormFromTab,
} = tabFormSlice.actions;

export const tabFormReducer = tabFormSlice.reducer;
