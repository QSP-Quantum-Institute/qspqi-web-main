import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../components/layout/AppLayout";
import { LandingPage } from "./pages/LandingPage";
import { HioxxViewPage } from "./pages/HioxxViewPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "hioxx",
        element: <HioxxViewPage />,
      },
    ],
  },
]);
