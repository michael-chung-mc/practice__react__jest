import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";

//import { createBrowserRouter, RouterProvider } from "react-router-dom"
// import App from "./App";
// import Profile from "./Profile";
// import ErrorPage from "./ErrorPage";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App />,
//         errorElement: <ErrorPage />
//     },
//     {
//         //path: "profile",
//         //element: <Profile />,
//         // children: [
//         //     { index: true, element: <DefaultProfile /> },
//         //     { path: "spinach", element: <Spinach /> },
//         //     { path: "popeye", element: <Popeye /> },
//         // ],
//         path: "profile/:name",
//         element: <Profile />,
//     },
//])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <RouterProvider router={router} /> */}
        <Router />
    </React.StrictMode>
)