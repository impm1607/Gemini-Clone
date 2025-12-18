import React, { useContext } from "react";
import { CgProfile, CgOptions } from "react-icons/cg";
import { FiMic } from "react-icons/fi";
import { LuImagePlus, LuSendHorizontal } from "react-icons/lu";
import { RiGeminiFill } from "react-icons/ri";
import { BsStars } from "react-icons/bs";
import { Context } from "../context/Context";

const Workspace = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="relative flex flex-col w-full h-screen p-2 overflow-x-hidden overflow-y-auto bg-[#f0f4f9]">
      {/* NAV BAR */}
      <div className="absolute top-2 left-0 right-0 w-full flex justify-between items-center gap-2 px-3">
        <p className="text-xl">Gemini</p>
        <CgProfile className="w-12 h-12" />
      </div>

      {/* CONTENT */}
      <div className="max-w-225 mx-auto my-5 w-full flex-1 flex flex-col justify-center items-center px-5">
        {!showResult ? (
          <>
            {/* INTRO */}
            <div className="max-w-175 w-full text-[#c4c7c5] font-medium p-5 flex justify-start items-center gap-3">
              <BsStars className="w-14 h-14 text-[#4b90ff]" />
              <div className="flex flex-col">
                <span className="text-5xl bg-[linear-gradient(16deg,#4b90ff,#ff5546)] bg-clip-text text-transparent">
                  Hello, User.
                </span>
                <p className="text-3xl ">How can I help you today ?</p>
              </div>
            </div>
          </>
        ) : (
          <div className="max-h-[70vh] w-full flex-1 flex flex-col gap-5 overflow-y-scroll overflow-x-hidden scrollbar-none py-4">
            <div className="flex flex-row-reverse gap-5">
              <CgProfile className="w-8 h-8 rounded-full shrink-0" />
              <span className="flex flex-row-reverse items-center justify-center bg-gray-300 px-4 py-1 rounded-2xl wrap-break-word">
                <p className="wrap-break-word text-sm">{recentPrompt}</p>
              </span>
            </div>
            <div className="flex justify-start items-center gap-5 my-2">
              {loading ? (
                <div className="relative flex justify-center items-center w-8 h-8">
                  <div className="absolute inset-0 rounded-full p-0.5 bg-[conic-gradient(#4b90ff,#ff5546,#4b90ff)] animate-rotate-border">
                    <div className="w-full h-full bg-white rounded-full"></div>
                  </div>
                  <RiGeminiFill className="relative w-5 h-5 text-blue-600 animate-rotate-icon" />
                </div>
              ) : (
                <BsStars className="w-8 h-8 text-blue-700" />
              )}
              <p
                dangerouslySetInnerHTML={{ __html: resultData }}
                className="text-base"
              ></p>
            </div>
          </div>
        )}

        {/* PROMPT BAR */}
        <div className="max-w-175 w-full flex flex-col gap-5 shadow-2xl bg-white rounded-2xl my-2 p-4">
          <div className="w-full flex">
            <input
              type="text"
              placeholder="Ask Gemini"
              className="flex-1 text-base outline-none font-light"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center justify-center gap-3">
              <LuImagePlus className="w-9 h-9 p-2 cursor-pointer rounded-full hover:bg-gray-300" />
              <span className="flex items-center justify-center gap-1 h-9 p-2 cursor-pointer rounded-full hover:bg-gray-300">
                <CgOptions /> <p>Tools</p>
              </span>
            </div>
            <div className="flex items-center justify-center">
              {input ? (
                <LuSendHorizontal
                  className="w-9 h-9 p-2 cursor-pointer rounded-full hover:bg-gray-300"
                  onClick={() => onSent()}
                />
              ) : (
                <FiMic className="w-9 h-9 p-2 cursor-pointer rounded-full hover:bg-gray-300" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workspace;

//  {/* CARDS */}
//         <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(160px,1fr))] p-5 my-5 max-h-[200px]">
//           <div className="h-full flex flex-col justify-between items-start p-3 gap-3 bg-[#f0f4f9] hover:bg-[#dfe4ea] text-[#585858] rounded-xl cursor-pointer">
//             <p>Suggest beautiful places to see on an upcoming road trip</p>
//             <FaRegCompass className="w-7 h-7 bg-white rounded-full p-1" />
//           </div>
//           <div className="h-full flex flex-col justify-between items-start p-3 gap-3 bg-[#f0f4f9] hover:bg-[#dfe4ea] text-[#585858] rounded-xl cursor-pointer">
//             <p>Briefly summarize this concept: urban planning</p>
//             <FaLightbulb className="w-7 h-7 bg-white rounded-full p-1" />
//           </div>
//           <div className="h-full flex flex-col justify-between items-start p-3 gap-3 bg-[#f0f4f9] hover:bg-[#dfe4ea] text-[#585858] rounded-xl cursor-pointer">
//             <p>Improve the readability of the following codek</p>
//             <FaCode className="w-7 h-7 bg-white rounded-full p-1" />
//           </div>
//           <div className="h-full flex flex-col justify-between items-start p-3 gap-3 bg-[#f0f4f9] hover:bg-[#dfe4ea] text-[#585858] rounded-xl cursor-pointer">
//             <p>Brainstorm team bonding activities for our work retreat</p>
//             <TiMessages className="w-7 h-7 bg-white rounded-full p-1" />
//           </div>
//         </div>

{
  /* <div className="max-w-250 mx-auto absolute bottom-0 left-1/2 -translate-x-1/2 w-full py-5 px-4">
  <div className="flex justify-between items-center gap-4 bg-[#f0f4f9] px-6 py-2 rounded-full">
    <div className="flex justify-center items-center gap-4"></div>
  </div>
  <div className="text-[10px] mt-4 w-full text-center">
    Gemini can make mistakes, so double-check it.
  </div>
</div>; */
}
