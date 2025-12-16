import React, { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Workspace from "./components/Workspace.jsx";
import { useIsMobile } from "./hooks/use-mobile.js";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <>
      {!isMobile && (
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      )}
      <Workspace />
    </>
  );
};

export default App;
