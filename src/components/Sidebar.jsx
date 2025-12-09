import React, { useState } from "react";
import { VscLayoutSidebarLeft, VscLayoutSidebarLeftOff } from "react-icons/vsc";
import { FaPlus } from "react-icons/fa6";
import { FiMessageSquare } from "react-icons/fi";
import { MdOutlineHistory } from "react-icons/md";
import { RiQuestionLine } from "react-icons/ri";
import { MdOutlineSettings } from "react-icons/md";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className="h-screen flex flex-col justify-between bg-[#f0f4f9] px-3 py-4">
      <div className="flex flex-col gap-8">
        <button
          className="w-8 h-8 flex justify-center items-center p-1.5 hover:bg-gray-300 rounded-md cursor-pointer"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? (
            <VscLayoutSidebarLeft className="w-full h-full" />
          ) : (
            <VscLayoutSidebarLeftOff className="w-full h-full" />
          )}
        </button>
        <div className="h-10 flex justify-center items-center gap-2 p-1.5 bg-[#dce1e9] hover:bg-gray-400/50 shadow-2xl rounded-md cursor-pointer">
          <FaPlus />
          {sidebarOpen && <p>New Chat</p>}
        </div>
        {sidebarOpen && (
          <div className="flex flex-col gap-2">
            <p>Recents </p>
            <div className="h-8 flex justify-start items-center gap-2 p-1.5 bg-[#e2e6eb]/50 hover:bg-gray-300 rounded-md cursor-pointer">
              <FiMessageSquare className="-mb-px" />
              <p className="text-sm">What is react.... ?</p>
            </div>
          </div>
        )}
      </div>
      <div className="bottom">
        <div className="h-8 flex justify-start items-center gap-1.5 p-1.5 hover:bg-gray-300 rounded-md cursor-pointer">
          <RiQuestionLine className="w-5 h-5" />
          {sidebarOpen && <p className="text-sm">Help</p>}
        </div>
        <div className="h-8 flex justify-start items-center gap-1.5 p-1.5 hover:bg-gray-300 rounded-md cursor-pointer">
          <MdOutlineHistory className="w-5 h-5" />
          {sidebarOpen && <p className="text-sm">Activity</p>}
        </div>
        <div className="h-8 flex justify-start items-center gap-1.5 p-1.5 hover:bg-gray-300 rounded-md cursor-pointer">
          <MdOutlineSettings className="w-5 h-5" />
          {sidebarOpen && <p className="text-sm">Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
