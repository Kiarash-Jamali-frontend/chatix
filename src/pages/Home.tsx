import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserProvider";

const Home: React.FC = () => {
  const user = useContext(UserContext);

  if (user) {
    return <>Home</>;
  }

  return <Navigate to={"/login"} />;
};

export default Home;
