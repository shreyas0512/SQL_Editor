import React from "react";
import { MemoizedTable } from "./Table";
import { useState } from "react";

function BottomPanel(props) {
  return (
    <div className="h-[47vh] mt-10">
      <button className=" bg-[#271BB1] text-white border-[1.5px] px-8 py-0.5 -mb-0.5 text-lg font-semibold ml-4 rounded-tl-md rounded-tr-md">
        Output
      </button>
      <div className="h-full w-full overflow-auto border-[1.5px] border-[#C7C5C5] mr-4 rounded-md flex flex-col">
        <button className="bg-[#271BB1] px-3 mr-6 mt-3 py-1 text-lg font-semibold text-white ml-4 rounded-md self-end">
          Export as CSV
        </button>
        <div className="overflow-auto">
          {props.results?<MemoizedTable results={props.results} />:
          <h1 className="text-xl mt-20 text-gray-500 text-center">Click Run to view Output!</h1>}
        </div>
      </div>
    </div>
  );
}

export default BottomPanel;
