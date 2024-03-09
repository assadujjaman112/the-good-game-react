import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: () => fetch("https://api.punkapi.com/v2/beers"),
  },
]);

export default router;
