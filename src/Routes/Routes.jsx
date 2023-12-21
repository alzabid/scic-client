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
      //   {
      //     path: "/properties",
      //     element: (
      //       <PrivateRoute>
      //         <Properties></Properties>
      //       </PrivateRoute>
      //     ),
      //   },
      //   {
      //     path: "/details/:id",
      //     element: (
      //       <PrivateRoute>
      //         <Details></Details>
      //       </PrivateRoute>
      //     ),
      //   },
      //   {
      //     path: "/update/:id",
      //     element: (
      //       <PrivateRoute>
      //         <UpdateProperty />
      //       </PrivateRoute>
      //     ),
      //   },
      //   {
      //     path: "makeOffer/:id",
      //     element: (
      //       <PrivateRoute>
      //         <MakeOffer></MakeOffer>
      //       </PrivateRoute>
      //     ),
      //   },

      //   {
      //     path: "payment/:id",
      //     element: <Payment></Payment>,
      //   },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      // {
      //   path: "dashboard",
      //   element: <Dashboard/>
      // },
    ],
  },

  {
    path: "/dashboard",
    element:  <Dashboard />,
    children: [

      {
        path: "todo",
        element: <TodoList/>
      },
      {
        path: "profile",
        element: <MyProfile/>
      },
      {
        path: "create",
        element: <Create/>
      },
      
    ],
  },
]);
export default Router;
