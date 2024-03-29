import React from "react";
import ReactDOM from "react-dom/client";
import { ProfilePage, TeamsPage } from "./pages";
import App from "./App";
import { Amplify } from "aws-amplify";
import config from "./aws-exports";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";
import { UserProvider } from "./context/UserContext";
Amplify.configure(config);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route exact path="/profile" element={<ProfilePage />} />
      <Route exact path="/teams" element={<TeamsPage />} />
      <Route path="*" element={<h1>404: Not Found</h1>} />
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </UserProvider>
  </React.StrictMode>
);
