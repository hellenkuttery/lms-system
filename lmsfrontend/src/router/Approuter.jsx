import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import PrivateRouter from "./PrivateRouter";
import LoginPage from "../pages/LoginPage";
import Register from './../pages/Register';

const router = createBrowserRouter([
    { path: "/login", element: <LoginPage/> },
    { path: "/register", element: <Register /> },
    {
      path: "/",
      element: <Login />,  // İlk sayfa Login olacak
    },
    {
      path: "/dashboard",
      element: <PrivateRouter />,  // Giriş kontrolü yapılacak
      children: [
        {
          path: "",
          element: <Dashboard />, 
          children: [
            { path: "home", element: <Home /> },
            { path: "profile", element: <Profile /> },
            { path: "settings", element: <Settings /> },
          ],
        },
      ],
    },
  ]);
const Approuter = () => {
  return <RouterProvider router={router} />;
};

export default Approuter;
