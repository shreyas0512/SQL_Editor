import React from "react";
import TableList from "./TableList";
import QueryList from "./QueryList";
import { UserRole } from "../Contexts/UserContext";

function LeftPanel() {
  const { role } = UserRole();
  return (
    <div className="h-full sm:w-[20vw] w-[91vw] self-center  rounded-tr-md rounded-br-md border-[1.5px] border-[#C7C5C5] shadow-sm flex flex-col ">
      <TableList />
      <div className="h-[2px] rounded-lg mx-3 mb-1 w-fill bg-gray-300"></div>
      <QueryList />
    </div>
  );
}

export default LeftPanel;
