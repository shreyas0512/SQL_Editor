import React from "react";
import TableList from "./TableList";
import QueryList from "./QueryList";

function Queries() {
  return (
    <div className="h-full w-[20vw]  rounded-tr-md rounded-br-md border-[1.5px] border-[#C7C5C5] shadow-sm flex flex-col">
      <TableList />
      <QueryList />
    </div>
  );
}

export default Queries;
