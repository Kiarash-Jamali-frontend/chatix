import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Home: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);

  if (user.status === "authenticated") {
    return (
      <div className="bg-white rounded-full py-4 px-6 border shadow-sm text-sm m-auto font-semibold hidden lg:block">
        First select a chat to start
      </div>
    )
  }

  if (user.status === "unauthenticated") {
    return <Navigate to={"/login"} />;
  }
};

export default Home;
