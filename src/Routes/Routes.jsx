import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Pages/Dashboard";
import MyProfile from "../Pages/MyProfile";
import TodoList from "../Pages/TodoList";
import Create from "../Pages/Create";
import PrivateRoute from "../Routes/PrivateRoute";
import Contact from "../Pages/Contact";
import About from "../Pages/About";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: (
          <PrivateRoute>
            <Contact />
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: (
          <PrivateRoute>
            <About/>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "todo",
        element: <TodoList />,
      },
      {
        path: "profile",
        element: <MyProfile />,
      },
      {
        path: "create",
        element: <Create />,
      },
    ],
  },
]);
export default Router;
