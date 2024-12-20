import { Provider } from "react-redux";
import { store } from "./redux/store";
import Layout from "./Layout";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateChat from "./pages/CreateChat";
import Helmet from "react-helmet";
import EditProfile from "./pages/EditProfile";
import 'react-toastify/dist/ReactToastify.css';
import CreateAccount from "./pages/CreateAccount";
import ResetPassword from "./pages/ResetPassword";

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
        path: "/create-account",
        element: <CreateAccount />
      },
      {
        path: "/edit-profile",
        element: <EditProfile />
      },
      {
        path: "/reset-password",
        element: <ResetPassword />
      }
    ]
  },
]);

function App() {
  return (
    <div className="min-h-svh">
      <Helmet>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="mask-icon" href="/mask-icon.svg" color="#000" />
        <meta name="theme-color" content="#000" />
        <meta name="description" content="" />
      </Helmet>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
