import React, { createContext } from "react";
import useApps from "../hooks/useApps";

export const CreateAppContext = createContext();

const AppContext = ({ children }) => {
  const { apps, loading } = useApps();
  const data = {
    apps,
    loading,
  };
  return (
    <div>
      <CreateAppContext.Provider value={data}>
        {children}
      </CreateAppContext.Provider>
    </div>
  );
};

export default AppContext;
