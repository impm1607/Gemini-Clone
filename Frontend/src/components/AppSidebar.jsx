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
import { VscLayoutSidebarLeft, VscLayoutSidebarLeftOff } from "react-icons/vsc";
import { FaPlus } from "react-icons/fa6";
import { FiMessageSquare } from "react-icons/fi";
import { MdOutlineHistory, MdOutlineSettings } from "react-icons/md";
import { RiQuestionLine } from "react-icons/ri";
import { Context } from "../context/Context";

const AppSidebar = () => {
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <Sidebar collapsible="icon" variant="inset" className="bg-[#e4ebf4]">
      {/* Header */}
      <SidebarHeader className="flex items-start gap-8 bg-[#e4ebf4]">
        <SidebarTrigger>
          <Button
            variant="outline"
            className="w-8 h-8 flex justify-center items-center p-1.5 rounded-md shrink-0"
          >
            <VscLayoutSidebarLeft className="w-full h-full" />
          </Button>
        </SidebarTrigger>

        <Button
          variant="outline"
          className="h-10 w-full gap-2.5 p-1.5 hover:bg-gray-400/60"
          onClick={() => newChat()}
        >
          <FaPlus className="h-4 w-4" />
          {!isCollapsed && <p className="text-nowrap text-sm"> New Chat</p>}
        </Button>
      </SidebarHeader>

      {/* Main content */}
      <SidebarContent className="bg-[#e4ebf4] py-8">
        {!isCollapsed && (
          <SidebarMenu className="flex flex-col-reverse gap-2 px-2">
            {prevPrompts.map((item, index) => (
              <SidebarMenuItem key={index}>
                <SidebarMenuButton
                  className="h-8 flex justify-start items-center gap-1 p-2 hover:bg-gray-400/60 animate-fadeIn"
                  onClick={() => loadPrompt(item)}
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
            <SidebarMenuButton className="hover:bg-gray-400/60">
              <RiQuestionLine className="h-4 w-4" />
              {!isCollapsed && <p className="text-sm">Help</p>}
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton className="hover:bg-gray-400/60">
              <MdOutlineHistory className="h-4 w-4" />
              {!isCollapsed && <p className="text-sm">Activity</p>}
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton className="hover:bg-gray-400/60">
              <MdOutlineSettings className="h-4 w-4" />
              {!isCollapsed && <p className="text-sm">Settings</p>}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
