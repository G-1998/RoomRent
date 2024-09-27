import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/Layout/AppLayout";
import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import RoomSelection from "./assets/pages/Roomsection/RoomSelection";


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
      
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;