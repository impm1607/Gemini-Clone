import React, { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { VscLayoutSidebarLeft } from "react-icons/vsc";
import { FaPlus } from "react-icons/fa6";
import { FiMessageSquare } from "react-icons/fi";
import { MdOutlineHistory, MdOutlineSettings } from "react-icons/md";
import { RiQuestionLine } from "react-icons/ri";
import { Context } from "../context/Context";

const AppSidebar = () => {
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);
  const { state, toggleSidebar } = useSidebar();

  const isCollapsed = state === "collapsed";

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <Sidebar collapsible="icon" variant="inset" className="bg-[#e4ebf4]">
      {/* Header */}
      <SidebarHeader className="flex items-start gap-6 bg-[#e4ebf4]">
        <SidebarTrigger className="w-9 h-9 flex justify-center items-center shrink-0 p-1.5 rounded-md hover:bg-gray-400/60 focus-visible:ring-0">
          <VscLayoutSidebarLeft className="w-full h-full" />
        </SidebarTrigger>

        <button
          className="w-full min-w-9 h-9 flex justify-center items-center gap-3 hover:bg-gray-400/60 rounded-md"
          onClick={() => {
            toggleSidebar();
            newChat();
          }}
        >
          <FaPlus className="h-4 w-4" />
          {!isCollapsed && <p className="text-nowrap text-sm"> New Chat</p>}
        </button>
      </SidebarHeader>

      {/* Main content */}
      <SidebarContent className="bg-[#e4ebf4] py-6">
        {!isCollapsed && (
          <SidebarMenu className="flex flex-col-reverse gap-2">
            {prevPrompts.map((item, index) => (
              <SidebarMenuItem key={index}>
                <SidebarMenuButton
                  className="h-8 flex justify-start items-center gap-1 p-2 hover:bg-gray-400/60 animate-fadeIn"
                  onClick={() => {
                    toggleSidebar();
                    loadPrompt(item);
                  }}
                >
                  <FiMessageSquare className="h-3 w-3 shrink-0 -mb-0.5" />
                  <span className="text-sm truncate">{item}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
            <p className="text-base">Chats</p>
          </SidebarMenu>
        )}
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="bg-[#e4ebf4]">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="flex items-center justify-start gap-2 h-9! min-w-9 hover:bg-gray-400/60"
              onClick={() => {
                toggleSidebar();
              }}
            >
              <RiQuestionLine className="h-5! w-5!" />
              {!isCollapsed && <p className="text-sm">Help</p>}
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="h-9! min-w-9 hover:bg-gray-400/60"
              onClick={() => {
                toggleSidebar();
              }}
            >
              <MdOutlineHistory className="h-5! w-5!" />
              {!isCollapsed && <p className="text-sm">Activity</p>}
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="h-9! min-w-9 hover:bg-gray-400/60"
              onClick={() => {
                toggleSidebar();
              }}
            >
              <MdOutlineSettings className="h-5! w-5!" />
              {!isCollapsed && <p className="text-sm">Settings</p>}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
