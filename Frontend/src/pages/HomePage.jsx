import React from "react";
import AppSidebar from "@/components/AppSidebar.jsx";
import Workspace from "@/components/Workspace.jsx";
import { SidebarProvider } from "@/components/ui/sidebar";

const HomePage = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <Workspace />
    </SidebarProvider>
  );
};

export default HomePage;
