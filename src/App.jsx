import React from "react"
import Auth from "./Pages/Auth/Auth"
import ProfilePage from "./Pages/Profile/ProfilePage"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WelcomeScreen from "./Pages/WelcomeScreen/WelcomeScreen";
import { ToastContainer } from "react-toastify";
import ProfileUpdate from "./Pages/Profile/ProfileUpdate";
import Error from "./Pages/Error/Error";

export const myRoutes = [
  { path: "/", element: <Auth /> },
  { path: "/welcome", element: <WelcomeScreen /> },
  { path: "/profile", element: <ProfilePage /> },
  { path: "/updateProfile", element: <ProfileUpdate /> },
  { path: "/*", element: <Error /> },
];

const routes = createBrowserRouter(myRoutes);

export default function App() {
  return <div className="app">
    <ToastContainer />
    <RouterProvider router={routes} />
  </div>
}

