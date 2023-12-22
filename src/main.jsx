import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Routes/Routes";
import AuthProvider from "./Providers/AuthProvider";
import { HelmetProvider } from "react-helmet-async";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <DndProvider backend={HTML5Backend}>
      <QueryClientProvider client={queryClient}>
        <React.StrictMode>
          <HelmetProvider>
            <RouterProvider router={Router} />
          </HelmetProvider>
        </React.StrictMode>
      </QueryClientProvider>
    </DndProvider>
  </AuthProvider>
);
