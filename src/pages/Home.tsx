import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Home: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);

  if (user.status === "authenticated") {
    return <></>;
  }

  if (user.status === "unauthenticated") {
    return <Navigate to={"/login"} />;
  }
};

export default Home;
