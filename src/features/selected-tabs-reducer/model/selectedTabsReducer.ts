import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface SelectedTabsState {
  selectedTabsIds: string[];
}

const selectedTabsInitialState: SelectedTabsState = {
  selectedTabsIds: [],
};

const selectedTabsSlice = createSlice({
  name: 'selected-tabs',
  initialState: selectedTabsInitialState,

  reducers: {
    appendSelectedTabId: (state, action: PayloadAction<string>) => {
      const { selectedTabsIds } = state;
      const { payload: newId } = action;

      return {
        ...state,
        selectedTabsIds: [...selectedTabsIds, newId],
      };
    },

    removeSelectedTabId: (state, action: PayloadAction<string>) => {
      const { selectedTabsIds } = state;
      const { payload: removedId } = action;

      const filteredTabsIds = selectedTabsIds.filter((id) => id !== removedId);

      return {
        ...state,
        selectedTabsIds: filteredTabsIds,
      };
    },

    removeAllSelectedTabsIds: (state) => {
      return {
        ...state,
        selectedTabsIds: [],
      };
    },
  },
});

export const {
  appendSelectedTabId,
  removeSelectedTabId,
  removeAllSelectedTabsIds,
} = selectedTabsSlice.actions;
export const selectedTabsReducer = selectedTabsSlice.reducer;
