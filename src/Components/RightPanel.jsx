import React from 'react'
import TableList from "./TableList";
import QueryList from "./QueryList";
import Columns from "./Columns";
import SavedQueries from "./SavedQueries";

function RightPanel() {
    return (
      <div className="h-full w-[20vw]  rounded-tr-md rounded-br-md border-[1.5px] border-[#C7C5C5] shadow-sm flex flex-col">
        <Columns/>
        <div className="h-[2px] rounded-lg mx-3 mb-1 w-fill bg-gray-300"></div>
        <SavedQueries/>
      </div>
    );
}

export default RightPanel