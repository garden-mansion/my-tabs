import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import { Provider } from "react-redux";

import { HomePage } from "@/pages/home";
import { PATH as NEW_TAB_PATH, NewTabPage } from "@/pages/new-tab";
import { PATH as LOAD_TAB_PATH, LoadTabPage } from "@/pages/load-tab";
import { store } from "./app/config";
import dayjs from "dayjs";
import "dayjs/locale/ru";

import { BaseLayout } from "./app/ui/BaseLayout";

dayjs.locale("ru");

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <HomePage pathToNewTabPage={NEW_TAB_PATH} pathToLoadTabPage={LOAD_TAB_PATH} />,
      },

      {
        path: NEW_TAB_PATH,
        element: <NewTabPage />,
      },

      {
        path: LOAD_TAB_PATH,
        element: <LoadTabPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
