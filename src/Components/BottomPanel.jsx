import React from "react";
import { MemoizedTable } from "./Table";
import { useState } from "react";
import { CurrTable } from "../Contexts/TableContext";

function BottomPanel(props) {
  return (
    <div className="h-[47vh] mb-8 sm:w-full w-[91vw]">
      <button className=" bg-[#271BB1] text-white border-[1.5px] px-8 py-0.5 -mb-0.5 sm:text-lg text-md font-semibold ml-4 rounded-tl-md rounded-tr-md">
        Output
      </button>
      <div className="h-full w-full overflow-auto border-[1.5px] border-[#C7C5C5] mr-4 rounded-md flex flex-col">
        <div onClick={{
          /*Download CSV*/

        }} className="bg-[#271BB1] h-20 px-3 mr-6 mt-3 py-1 sm:text-lg text-sm font-semibold cursor-default text-transparent bg-transparent ml-4 rounded-md self-end">
        </div>
        {!props.loading ?<div className="overflow-auto">
          {props.results?<MemoizedTable results={props.results} />:
          <h1 className="text-xl mt-20 text-gray-700 text-center">Click Run to view Output!</h1>}
        </div>:
        <div className="flex justify-center items-center h-full">
          <div className="animate-spin rounded-full h-24 w-24 border-t-[3px] border-b-[3px] border-gray-400"></div>
        </div>
          }
      </div>
    </div>
  );
}

export default React.memo(BottomPanel);
