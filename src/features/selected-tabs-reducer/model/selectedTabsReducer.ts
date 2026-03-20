import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface SelectedTabsState {
  selectedTabsIds: string[];
}

const selectedTabsInitialState: SelectedTabsState = {
  selectedTabsIds: [],
};

const selectedTabsSlice = createSlice({
  name: "selected-tabs",
  initialState: selectedTabsInitialState,

  reducers: {
    append: (state, action: PayloadAction<string>) => {
      const { selectedTabsIds } = state;
      const { payload: newId } = action;

      return {
        ...state,
        selectedTabsIds: [...selectedTabsIds, newId],
      };
    },

    remove: (state, action: PayloadAction<string>) => {
      const { selectedTabsIds } = state;
      const { payload: removedId } = action;

      const filteredTabsIds = selectedTabsIds.filter((id) => id !== removedId);

      return {
        ...state,
        selectedTabsIds: filteredTabsIds,
      };
    },

    removeAll: (state) => {
      return {
        ...state,
        selectedTabsIds: [],
      };
    },
  },
});

export const { append, remove, removeAll } = selectedTabsSlice.actions;
export const selectedTabsReducer = selectedTabsSlice.reducer;
