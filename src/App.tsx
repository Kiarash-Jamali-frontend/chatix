import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserProvider from "./contexts/UserProvider";
import Layout from "./Layout";
import Chat from "./pages/Chat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/chat/:phone",
        element: <Chat />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <>
      <div className="min-h-screen">
        <UserProvider>
          <RouterProvider router={router} />
        </UserProvider>
      </div>
    </>
  );
}

export default App;
