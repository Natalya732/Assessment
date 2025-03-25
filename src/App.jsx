import React from "react"
import Auth from "./Pages/Auth/Auth"
import ProfilePage from "./Pages/Profile/ProfilePage"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WelcomeScreen from "./Pages/WelcomeScreen/WelcomeScreen";

export const myRoutes = [
  { path: "/", element: <Auth /> },
  { path: "/welcome", element: <WelcomeScreen /> },
  { path: "/profile", element: <ProfilePage /> }
];

const routes = createBrowserRouter(myRoutes);

export default function App() {
  return <div className="app">
    <RouterProvider router={routes} />
  </div>
}

