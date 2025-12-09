import React, { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Workspace from "./components/Workspace.jsx";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Workspace />
    </>
  );
};

export default App;
