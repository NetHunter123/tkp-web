import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Topbar from "./components/Topbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Basket from "./pages/Basket";

const Layout = () => {
  return (
    <>
      <Topbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
    ],
  },
  // { path: "/register", element: <Register /> },
  // { path: "/login", element: <Login /> },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
