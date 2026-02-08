import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../components/layout/MainLayout";
import { LandingPage } from "./pages/LandingPage";
import { HioxxViewPage } from "./pages/HioxxViewPage";
import { AppRoutes } from "../common/enums";

export const router = createBrowserRouter([
  {
    path: AppRoutes.HOME,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
  {
    path: AppRoutes.HIOXX,
    element: <HioxxViewPage />,
  },
]);
