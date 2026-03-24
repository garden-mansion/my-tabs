import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';

import { Provider } from 'react-redux';

import { HomePage } from '@/pages/home';
import {
  PATH as NEW_TAB_TEXT_MODE_PATH,
  NewTabTextModePage,
} from '@/pages/new-tab-text-mode';
import { PATH as LOAD_TAB_PATH, LoadTabPage } from '@/pages/load-tab';
import { store, theme } from './app/config';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

import { BaseLayout } from '@/app/ui/BaseLayout';
import { TAB_PAGE_PATH, TabPage } from '@/pages/tab-page';
import { CssVarsProvider } from '@mui/joy';
import {
  EDIT_TAB_PAGE_PATH,
  EDIT_TAB_PATH_BASE,
  EditTabPage,
} from './pages/edit-tab';

dayjs.locale('ru');

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: (
          <HomePage
            pathToEditTabPage={EDIT_TAB_PATH_BASE}
            pathToLoadTabPage={LOAD_TAB_PATH}
            pathToTabPage={TAB_PAGE_PATH}
          />
        ),
      },

      {
        path: NEW_TAB_TEXT_MODE_PATH,
        element: <NewTabTextModePage />,
      },

      {
        path: LOAD_TAB_PATH,
        element: <LoadTabPage />,
      },

      {
        path: TAB_PAGE_PATH,
        element: <TabPage />,
      },

      {
        path: EDIT_TAB_PAGE_PATH,
        element: <EditTabPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <CssVarsProvider theme={theme}>
        <RouterProvider router={router} />
      </CssVarsProvider>
    </Provider>
  </StrictMode>,
);
