import { currentTabReducer } from '@/features/current-tab-reducer';
import { selectedTabsReducer } from '@/features/selected-tabs-reducer';
import { tabFormReducer } from '@/features/tab-form-reducer';
import { tabsReducer } from '@/features/tabs-reducer';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    tabsReducer,
    selectedTabsReducer,
    currentTabReducer,
    tabFormReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
