import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Page/Dashboard";
import Users from "./Page/Users";
import Photos from "./Page/Photos";
import Setting from "./Page/Setting";
import NotFound from "./Page/NotFound";

/*
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";

function App() {
  return (
    <div className="w-screen h-screen flex-center bg-slate-50">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
*/

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },

    {
      path: "/users",
      element: <Users />,
    },
    {
      path: "/photos",
      element: <Photos />,
    },
    {
      path: "/setting",
      element: <Setting />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
