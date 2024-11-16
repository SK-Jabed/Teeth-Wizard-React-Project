import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import About from "../components/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: "/",
            element: <HomePage></HomePage>
        },
        {
            path: "/about",
            element: <About></About>
        }
    ]
  },
]);

export default router;
