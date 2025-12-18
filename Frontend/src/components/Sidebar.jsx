import React, { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { VscLayoutSidebarLeft, VscLayoutSidebarLeftOff } from "react-icons/vsc";
import { FaPlus } from "react-icons/fa6";
import { FiMessageSquare } from "react-icons/fi";
import { MdOutlineHistory, MdOutlineSettings } from "react-icons/md";
import { RiQuestionLine } from "react-icons/ri";
import { Context } from "../context/Context";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className="h-screen max-w-57.5 flex flex-col justify-between bg-[#e4ebf4] px-3 py-4">
      <div className="flex flex-col gap-8">
        <Button
          variant="ghost"
          className="w-8 h-8 flex justify-center items-center p-1.5 hover:bg-gray-400/60 rounded-md"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? (
            <VscLayoutSidebarLeft className="w-full h-full" />
          ) : (
            <VscLayoutSidebarLeftOff className="w-full h-full" />
          )}
        </Button>
        <Button
          variant="outline"
          className="h-10 flex justify-center items-center gap-1.5 p-1.5 hover:bg-gray-400/60 shadow-2xl rounded-md"
          onClick={() => newChat()}
        >
          <FaPlus className="w-4 h-4" />
          {sidebarOpen && <p className="text-nowrap text-sm">New Chat</p>}
        </Button>
        {sidebarOpen && (
          <div className="flex flex-col gap-2">
            <p>Recents </p>
            <div className="flex flex-col-reverse gap-2">
              {prevPrompts.map((item, index) => {
                return (
                  <div
                    className="h-8 flex justify-start items-center gap-1 p-1.5 hover:bg-gray-400/60 rounded-md cursor-pointer animate-fadeIn"
                    onClick={() => loadPrompt(item)}
                  >
                    <FiMessageSquare className="h-3 w-3 shrink-0 " />
                    <p className="text-sm truncate">{item}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 pb-2">
        <div className="h-8 flex justify-start items-center gap-1.5 p-1.5  hover:bg-gray-400/60 rounded-md cursor-pointer">
          <RiQuestionLine className="w-5 h-5" />
          {sidebarOpen && <p className="text-sm">Help</p>}
        </div>
        <div className="h-8 flex justify-start items-center gap-1.5 p-1.5  hover:bg-gray-400/60 rounded-md cursor-pointer">
          <MdOutlineHistory className="w-5 h-5" />
          {sidebarOpen && <p className="text-sm">Activity</p>}
        </div>
        <div className="h-8 flex justify-start items-center gap-1.5 p-1.5  hover:bg-gray-400/60 rounded-md cursor-pointer">
          <MdOutlineSettings className="w-5 h-5" />
          {sidebarOpen && <p className="text-sm">Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
