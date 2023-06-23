import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BottomInfo from "./custom-element/bottomInfo";
import NavBar from "./custom-element/nav-bar";
import Home from "./pages/home";
import MainPage from "./pages/home";

// Render your React component instead
const app = document.getElementById("app");
const root = createRoot(app as any);

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />
  }
])

root.render(
  <div>
    <RouterProvider router={router} />
  </div>
);
