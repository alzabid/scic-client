import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>
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
    //   {
    //     path: "login",
    //     element: <Login></Login>,
    //   },
    //   {
    //     path: "register",
    //     element: <Register></Register>,
    //   },
    ],
  },

//   {
//     path: "/dashboard",
//     element: (
//       <PrivateRoute>
//         <Dashboard></Dashboard>
//       </PrivateRoute>
//     ),
//     children: [
//       {
//         path: "add",
//         element: <AddProperties></AddProperties>,
//       },
//       {
//         path: "property",
//         element: <AllProperty></AllProperty>,
//       },
//       {
//         path: "agentproperty",
//         element: <AgentProperties></AgentProperties>,
//       },
//       {
//         path: "request",
//         element: <RequestedProperties></RequestedProperties>,
//       },

//       {
//         path: "users",
//         element: <ManageUsers></ManageUsers>,
//       },
//       {
//         path: "profile",
//         element: <MyProfile></MyProfile>,
//       },
//       {
//         path: "wishlist",
//         element: <Wishlist></Wishlist>,
//       },
//       {
//         path: "myreviews",
//         element: <MyReviews></MyReviews>,
//       },
//       {
//         path: "bought",
//         element: <PorpertyBought></PorpertyBought>,
//       },
//       {
//         path: "allreviews",
//         element: <ManageReviews></ManageReviews>,
//       },
//       // {
//       //   path: "payment/:id",
//       //   element: <Payment></Payment>,
//       // },
//     ],
//   },
]);
export default Router;
