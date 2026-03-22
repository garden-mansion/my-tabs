import type { Tab } from '@/entities/tab';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface CurrentTabState {
  currentTab: Tab | null;
}

const currentTabInitialState: CurrentTabState = {
  currentTab: null,
};

const currentTabSlice = createSlice({
  name: 'current-tab',
  initialState: currentTabInitialState,

  reducers: {
    setCurrentTab: (state, action: PayloadAction<Tab>) => {
      const { payload: currentTab } = action;

      return {
        ...state,
        currentTab,
      };
    },

    removeCurrentTab: (state) => {
      return {
        ...state,
        currentTab: null,
      };
    },
  },
});

export const { setCurrentTab, removeCurrentTab } = currentTabSlice.actions;
export const currentTabReducer = currentTabSlice.reducer;
