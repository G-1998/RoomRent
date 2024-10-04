import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/Layout/AppLayout";
import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import RoomSelection from "./assets/pages/Roomsection/RoomSelection";
import Login from "./assets/pages/login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, 
    children: [
      {
        index: true,
        element: <Home />, 
      },
      {
        path: "RoomSelection",
        element: <RoomSelection />, 
      },
      {
        path: "about", 
        element: <About />,
      },
      {
        path: "login", 
        element: <Login />, // Use the correct PascalCase component name
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
