import React from "react";
import { MemoizedTable } from "./Table";
import { useState } from "react";

function BottomPanel(props) {
  return (
    <div className="h-[47vh] mb-8 sm:w-full w-[91vw]">
      <button className=" bg-[#271BB1] text-white border-[1.5px] px-8 py-0.5 -mb-0.5 sm:text-lg text-md font-semibold ml-4 rounded-tl-md rounded-tr-md">
        Output
      </button>
      <div className="h-full w-full overflow-auto border-[1.5px] border-[#C7C5C5] mr-4 rounded-md flex flex-col">
      <div className="h-24"></div>
        <div className="overflow-auto">
          {props.results?<MemoizedTable results={props.results} />:
          <h1 className="text-xl mt-20 text-gray-700 text-center">Click Run to view Output!</h1>}
        </div>
      </div>
    </div>
  );
}

export default BottomPanel;
