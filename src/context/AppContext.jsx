import React, { createContext, useState } from "react";

export const CreateAppContext = createContext();

const AppContext = ({ children }) => {
  const [installedApps, setInstalledApps] = useState([]);
  const data = {
    installedApps,
    setInstalledApps,
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
