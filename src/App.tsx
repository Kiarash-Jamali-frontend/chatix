import { Provider } from "react-redux";
import { store } from "./redux/store";
import Layout from "./Layout";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateChat from "./pages/CreateChat";
import EditProfile from "./pages/EditProfile";

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
        path: "/create-chat",
        element: <CreateChat />,
      },
      {
        path: "/chat/:email",
        element: <Chat />
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/edit-profile",
        element: <EditProfile />
      }
    ]
  },
]);

function App() {
  return (
    <div className="min-h-svh">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
