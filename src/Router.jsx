import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./Index";
import ErrorPage from "./Error";
import Profile from "./src__top_react_router/App";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />,
        },
        {
            path: "profile/:name",
            element: <Profile/>,
        },
    ]);
    return <RouterProvider router={router} />;
};

export default Router;