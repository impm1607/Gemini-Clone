import React, { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Workspace from "./components/Workspace.jsx";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useIsMobile } from "./hooks/use-mobile.js";

const App = () => {
  return (
    <SidebarProvider className="">
      <Sidebar />
      <Workspace />
    </SidebarProvider>
  );
};

export default App;
