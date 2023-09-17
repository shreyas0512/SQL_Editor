import React from "react";
import Table from "./Table";

function BottomPanel(props) {
  return (
    <div className="h-[45vh] mr-4 mt-10 mb-9 ">
      <button className="bg-[#271BB1] px-8 py-1 text-lg font-semibold text-white ml-4 rounded-tl-md rounded-tr-md">
        Output
      </button>
      <button className="bg-[#271BB1] px-8 py-1 text-lg font-semibold text-white ml-8 rounded-tl-md rounded-tr-md">
        Columns
      </button>
      <div className="h-full w-full overflow-auto border-[1.5px] border-[#C7C5C5] mr-4 rounded-md flex flex-col">
        <button className="bg-[#271BB1] px-3 mr-6 mt-3 py-1 text-lg font-semibold text-white ml-4 rounded-md self-end">
          Export as CSV
        </button>
        <div className="overflow-auto">
          {props.results && <Table results={props.results} />}
        </div>
      </div>
    </div>
  );
}

export default BottomPanel;
