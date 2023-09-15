import React from "react";
import { useState, useRef } from "react";

function TableList() {
  const [tables, setTables] = useState(["table1", "table2", "table3"]);
  const hiddenfileInput = useRef(null);
  const addTable = async () => {
    hiddenfileInput.current.click();
    
  };
  const handleChange = async (e) => {
    const fileUploaded = e.target.files[0];
    setTables([...tables, fileUploaded.name]);
  };

  return (
    <div className="h-1/2 flex flex-col">
      <h1 className="text-center font-semibold text-xl">Tables</h1>
      <div className="overflow-auto flex flex-col">
        {tables.map((element, index) => {
          return (
            <button
              key={index}
              className="text-center border-[1px] border-[#c8c6c6] mt-2 px-full py-1 mx-2 rounded-md hover:bg-[#271BB1] hover:text-white"
            >
              {element}
            </button>
          );
        })}
      </div>

      <button
        className="text-[#271BB1] font-bold text-md border-[1.5px] py-1 border-[#271BB1] mx-2 rounded-md mt-1"
        onClick={addTable}
      >
        + Add Table
      </button>
      <input
        ref={hiddenfileInput}
        onChange={handleChange}
        style={{ display: "none" }}
        type="file"
        accept=".csv"
      />
    </div>
  );
}

export default TableList;
