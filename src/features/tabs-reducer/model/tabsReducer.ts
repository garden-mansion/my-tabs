import { type Tab } from "@/entities/tab";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getTabsFromStorage } from "../lib/getTabsFromStorage";

interface TabsState {
  tabs: Tab[];
}

const initialState: TabsState = {
  tabs: getTabsFromStorage(),
};

const tabsSlice = createSlice({
  name: "tabs",
  initialState,

  reducers: {
    append: (state, action: PayloadAction<Tab>) => {
      const { tabs } = state;
      const { payload: newTab } = action;

      return {
        ...state,
        tabs: [...tabs, newTab],
      };
    },

    remove: (state, action: PayloadAction<string>) => {
      const { tabs } = state;
      const { payload: id } = action;

      const filteredTabs = tabs.filter((tab) => tab.id !== id);
      return {
        ...state,
        tabs: filteredTabs,
      };
    },

    replace: (state, action: PayloadAction<Tab>) => {
      const { tabs } = state;
      const { payload: substitutionTab } = action;

      const newTabs = tabs.map((tab) => (tab.id === substitutionTab.id ? substitutionTab : tab));
      return {
        ...state,
        tabs: newTabs,
      };
    },
  },
});

export const { append, remove, replace } = tabsSlice.actions;
export const tabsReducer = tabsSlice.reducer;
