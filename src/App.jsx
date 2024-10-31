import React from "react";
import { Button } from "flowbite-react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
// pages
import Register from "./pages/Register";
import Home from "./pages/Home";
import CardDetail from "./pages/CardDetail";
import CreatArticle from "./components/CreatArticle";
// protect-router
import ProtectRouter from "./components/ProtectRouter";
// layouts
import MainLayout from "./layouts/MainLayout";
import MyProfile from "./components/MyProfile";

function App() {
  const { user } = useSelector((state) => state.registerSlice);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "cardDetail/:id",
          element: <CardDetail />,
        },
        {
          path: "myprofile",
          element: <MyProfile />,
        },
        {
          path: "createArticle",
          element: (
            <ProtectRouter user={user}>
              <CreatArticle />
            </ProtectRouter>
          ),
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
