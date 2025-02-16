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
        loader: async () => {
            const servicesRes = await fetch("/service.json");
            const servicesData = await servicesRes.json();

            const feedbackRes = await fetch("/happyClients.json");
            const feedbackData = await feedbackRes.json();

            return { servicesData, feedbackData }
        },
      },
      {
        path: "/treatments",
        element: <Treatments></Treatments>,
        loader: () => fetch("/service.json"),
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
