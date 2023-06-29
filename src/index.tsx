import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppRoot from "./app/appRoot";
import BottomInfo from "./custom-element/bottomInfo";
import Counter from "./custom-element/counter";
import NavBar from "./custom-element/nav-bar";
import ErrorPage from "./pages/error";
import Home from "./pages/home";
import MainPage from "./pages/home";
import PostList from "./pages/post-list";

// Render React component
const app = document.getElementById("app");
const root = createRoot(app as any);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppRoot />,
    errorElement:<ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      }, 
      {
        path: "posts",
        element: <PostList />
      }
    ]
  }
])

root.render(
  <div>
    <RouterProvider router={router} />
  </div>
);
