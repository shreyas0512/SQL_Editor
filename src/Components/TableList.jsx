import React from "react";
import { useState, useRef } from "react";
import { CurrTable } from "../Contexts/TableContext";

function TableList() {

  const [tables, setTables] = useState([{
    link:"https://csv-files.vercel.app/customers0.csv",
    name:'customers'
  },
  {
    link:"https://csv-files.vercel.app/employees0.csv",
    name:'employees'
  },{
    link:'https://csv-files.vercel.app/stock_market.csv',
    name:'stock_market'
  }
  ]);
  const [file, setFile] = useState(null); 
  const hiddenfileInput = useRef(null);
  const { selectedTable, setSelectedTable } = CurrTable();
  const addTable = async () => {
    hiddenfileInput.current.click();
  };
  const handleChange = async (e) => {
    const fileUploaded = e.target.files[0];
    setFile(fileUploaded);
    const tablename = fileUploaded.name.slice(0, -4);
    const link = URL.createObjectURL(fileUploaded);
    const newtable={
      link:link,
      name:tablename
    }

    setTables([...tables, newtable]);
  };

  return (
    <div className="h-1/2 flex flex-col justify-start sm:mb-2 mb-4 ">
      <h1 className="text-center font-semibold sm:text-xl text-lg">Tables</h1>
      <div className="flex flex-col h-full justify-between" >
      <div className="overflow-auto flex flex-col ">
        {tables.map((element, index) => {
          return (
            <button
              key={index}
              className={`text-center border-[1px] border-[#c8c6c6] mt-2 px-full py-1 mx-2 text-md rounded-md hover:bg-[#271BB1] transition duration-50 ease-in-out hover:text-white ${
                selectedTable.name == element.name
                  ? "bg-[#cfcaf1] border-[1px] font-semibold border-[#282364]"
                  : null
              }`}
              onClick={async () => {
                setSelectedTable(element);
              }}
            >
              {element.name}
            </button>
          );
        })}
      </div>

      <button
        className="text-[#271BB1] font-semibold text-md border-[1.5px] py-0.5 border-[#271BB1] mx-2 rounded-md mt-1 mb-2 hover:bg-[#271BB1] hover:text-white transition duration-50 ease-in-out"
        onClick={addTable}
      >
        + Add Table
      </button>
      </div>
      <input
        ref={hiddenfileInput}
        onChange={handleChange}
        className="hidden"
        type="file"
        accept=".csv"
      />
    </div>
  );
}

export default TableList;
