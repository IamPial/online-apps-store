import React, { useState } from "react";
import { CreateAppContext } from "./AppContext";

const AppContextProvider = ({ children }) => {
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

export default AppContextProvider;
