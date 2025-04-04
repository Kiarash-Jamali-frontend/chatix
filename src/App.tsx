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
import CreateGroup from "./pages/CreateGroup";
import Group from "./pages/Group";
import "/node_modules/video-react/dist/video-react.css";

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
        path: "/create-group",
        element: <CreateGroup />,
      },
      {
        path: "/chat/:email",
        element: <Chat />
      },
      {
        path: "/group/:groupId",
        element: <Group />
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
    <div className="min-h-svh select-none overflow-hidden">
      <Helmet>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#fff" />
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <script type="text/javascript" src="/najva-script.js">
        </script>
      </Helmet>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
