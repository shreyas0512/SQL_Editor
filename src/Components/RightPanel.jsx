import React from 'react'
import TableList from "./TableList";
import QueryList from "./QueryList";
import Columns from "./Columns";
import SavedQueries from "./SavedQueries";

function RightPanel() {
    return (
      <div className=" sm:h-full sm:w-[20vw] sm:ml-0 ml-8 h-2/3 sm:overflow-hidden w-[91vw] sm:mt-0 mt-14 sm:rounded-bl-md sm:rounded-tl-md border-[1.5px] border-[#C7C5C5] shadow-sm flex flex-col sm:!mr-0 !mr-8">
        <Columns/>
        <div className="h-[2px] rounded-lg mx-3 mb-1 w-fill bg-gray-300"></div>
        <SavedQueries/>
      </div>
    );
}

export default RightPanel