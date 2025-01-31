import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
    { path: "/login", element: <Login /> },
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
