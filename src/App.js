import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Topbar from "./components/Topbar";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import Home from "./pages/Home";

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
