import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root, Tools } from "./routes";

const router = createBrowserRouter([
    { path: "/", element: <Root /> },
    { path: "/tools", element: <Tools /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
