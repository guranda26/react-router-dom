import LayoutLink from "./layouts/LayoutOfLinks";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import MainPage from "./pages/MainPage";
import ParamPage from "./pages/ParamPage";

const router = [
  {
    element: <LayoutLink />,
    path: "/",
    children: [
      {
        element: <MainPage />,
        path: "/",
      },
      {
        element: <AboutPage />,
        path: "about",
      },
    ],
  },
  {
    element: <ParamPage />,
    path: ":id",
  },
  {
    element: <ErrorPage />,
    path: "*",
  },
];

export default router;
