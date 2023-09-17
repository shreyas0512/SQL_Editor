import React from "react";
import { useState, useRef } from "react";
import { CurrTable } from "../Contexts/TableContext";

function TableList() {

  const [tables, setTables] = useState([{
    link:'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/csv/customers.csv',
    name:'customers'
  },
  {
    link:'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/csv/employees.csv',
    name:'employees'
  }
  ]);
  const [file, setFile] = useState(null); // [file, setFile
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
    console.log(link);
    const newtable={
      link:link,
      name:tablename
    }

    setTables([...tables, newtable]);
  };

  return (
    <div className="h-1/2 flex flex-col justify-start mb-2">
      <h1 className="text-center font-semibold text-xl">Tables</h1>
      <div className="overflow-auto flex flex-col ">
        {tables.map((element, index) => {
          return (
            <button
              key={index}
              className={`text-center border-[1px] border-[#c8c6c6] mt-2 px-full py-1 mx-2 rounded-md hover:bg-[#271BB1] hover:text-white ${
                selectedTable === element
                  ? "bg-[#cfcaf1] border-[1px] font-semibold border-[#282364]"
                  : null
              }`}
              onClick={async () => {
                setSelectedTable(element);
                console.log(selectedTable);
              }}
            >
              {element.name}
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
