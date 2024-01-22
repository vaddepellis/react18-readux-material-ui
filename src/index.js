import * as React from "react";
import { createRoot } from "react-dom/client";
import App from './App'
import {
  RouterProvider,
} from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={App} />
  </Provider>
);