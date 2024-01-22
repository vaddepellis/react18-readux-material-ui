import React from "react";
import {
  createBrowserRouter,
  Link,
} from "react-router-dom";
import Home from './components/pages/Home'
import Login from './components/pages/Login'
const App = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "login",
    element: <Login />,
  },
]);

export default App;