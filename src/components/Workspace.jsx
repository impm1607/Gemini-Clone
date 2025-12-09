import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaRegCompass, FaCode, FaLightbulb } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { FiMic } from "react-icons/fi";
import { LuImagePlus, LuSendHorizontal } from "react-icons/lu";

const Workspace = () => {
  return (
    <div className="relative flex-1 h-screen p-2">
      {/* NAV BAR */}
      <div className="w-full flex justify-between items-center gap-2 text-xl p-4">
        <p>Gemini</p>
        <CgProfile className="w-12 h-12" />
      </div>

      {/* CONTENT */}
      <div className="max-w-[900px] mx-auto my-5">
        {/* INTRO */}
        <div className="mx-12 text-5xl text-[#c4c7c5] font-medium p-5">
          <p>
            <span className="bg-[linear-gradient(16deg,#4b90ff,#ff5546)] bg-clip-text text-transparent">
              Hello, Hi.
            </span>
          </p>
          <p>How can I help you today ?</p>
        </div>
        {/* CARDS */}
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(160px,1fr))] p-5 my-5 max-h-[200px]">
          <div className="h-full flex flex-col justify-between items-start p-3 gap-3 bg-[#f0f4f9] hover:bg-[#dfe4ea] text-[#585858] rounded-xl cursor-pointer">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <FaRegCompass className="w-7 h-7 bg-white rounded-full p-1" />
          </div>
          <div className="h-full flex flex-col justify-between items-start p-3 gap-3 bg-[#f0f4f9] hover:bg-[#dfe4ea] text-[#585858] rounded-xl cursor-pointer">
            <p>Briefly summarize this concept: urban planning</p>
            <FaLightbulb className="w-7 h-7 bg-white rounded-full p-1" />
          </div>
          <div className="h-full flex flex-col justify-between items-start p-3 gap-3 bg-[#f0f4f9] hover:bg-[#dfe4ea] text-[#585858] rounded-xl cursor-pointer">
            <p>Improve the readability of the following codek</p>
            <FaCode className="w-7 h-7 bg-white rounded-full p-1" />
          </div>
          <div className="h-full flex flex-col justify-between items-start p-3 gap-3 bg-[#f0f4f9] hover:bg-[#dfe4ea] text-[#585858] rounded-xl cursor-pointer">
            <p>Brainstorm team bonding activities for our work retreat</p>
            <TiMessages className="w-7 h-7 bg-white rounded-full p-1" />
          </div>
        </div>
      </div>

      {/* SEARCH BAR */}
      <div className="max-w-[1000px] mx-auto absolute bottom-0 left-1/2 -translate-x-1/2 w-full py-5">
        <div className="flex justify-between items-center gap-4 bg-[#f0f4f9] px-6 py-2 rounded-full">
          <input
            type="text"
            placeholder="Enter the prompt here..."
            className="flex-1 text-base outline-none"
          />
          <div className="flex justify-center items-center gap-4">
            <LuImagePlus className="w-8 h-8 p-1.5 cursor-pointer rounded-full hover:bg-gray-300" />
            <FiMic className="w-8 h-8 p-1.5 cursor-pointer rounded-full hover:bg-gray-300" />
            <LuSendHorizontal className="w-8 h-8 p-1.5 cursor-pointer rounded-full hover:bg-gray-300" />
          </div>
        </div>
        <div className="text-[10px] mt-4 w-full text-center">
          Gemini may display inaccurate info, including about people, so
          double-check its responses. Your privacy and Gemini Apps
        </div>
      </div>
    </div>
  );
};

export default Workspace;
