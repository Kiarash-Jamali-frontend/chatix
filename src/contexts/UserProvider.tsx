import { onAuthStateChanged, User } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../helpers/firebase";

export const UserContext = createContext<User | null | "loading">(null);

type PropTypes = {
  children: React.ReactNode;
};

const UserProvider: React.FC<PropTypes> = ({ children }) => {
  const [user, setUser] = useState<User | null | "loading">("loading");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, [auth, user]);

  return (
    <UserContext.Provider value={user}>
      {user === "loading" && <>Loading</>}
      {user && user !== "loading" && children}
    </UserContext.Provider>
  );
};

export default UserProvider;
