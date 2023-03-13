import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Teams from "./components/Teams";
import Contact from "./components/Contact";
import { Amplify } from "aws-amplify";
import config from "./aws-exports";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";
Amplify.configure(config);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route exact path="teams" element={<Teams />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<h1>404: Not Found</h1>} />
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
