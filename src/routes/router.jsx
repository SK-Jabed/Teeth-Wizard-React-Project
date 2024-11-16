import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import Treatments from "../pages/Treatments";
import Appointments from "../pages/Appointments";
import Profile from "../pages/Profile";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/treatments",
        element: <Treatments></Treatments>,
      },
      {
        path: "/appointments",
        element: <Appointments></Appointments>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);

export default router;
