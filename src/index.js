import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Amplify } from "aws-amplify";
import config from "./aws-exports";
import { createRoot } from "react-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import "./index.css";
Amplify.configure(config);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="contact" element={<div>Contact</div>} />
      <Route
        path="dashboard"
        element={<div>Dashboard</div>}
        // loader={({ request }) =>
        //   fetch("/api/dashboard.json", {
        //     signal: request.signal,
        //   })
        // }
      />
      <Route element={<div> auth</div>}>
        <Route
          path="login"
          element={<div>login </div>}
          // loader={redirectIfUser}
        />
        <Route path="logout" />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
