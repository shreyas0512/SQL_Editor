import React, { useEffect, useState } from "react";
import { CurrTable } from "../Contexts/TableContext";

function QueryList() {
  const { selectedTable,selectedQuery,setSelectedQuery } = CurrTable();
  const [queries, setQueries] = useState([]);
  useEffect(() => {
    if (selectedTable.name === "customers") {
      setQueries([
        "SELECT * FROM CUSTOMERS;",
        "SELECT CUSTOMERID,CONTACTNAME FROM CUSTOMERS;",
        "SELECT CUSTOMERID FROM CUSTOMERS;",
      ]);
    } else if (selectedTable.name === "employees") {
      setQueries([
        "SELECT * FROM EMPLOYEES;",
        "SELECT EMPLOYEEID, LASTNAME, FIRSTNAME FROM EMPLOYEES;",
        "SELECT EMPLOYEEID FROM EMPLOYEES;",
      ]);
    }
    else if(selectedTable==="" ){
    }else{
      setQueries([`SELECT * FROM ${selectedTable.name.toUpperCase()};`])
    }
  }, [selectedTable]);
  return (
    <div className="h-1/2 flex flex-col justify-start sm:w-[20vw]">
      <h1 className="text-center font-semibold sm:text-lg text-md">Available Queries</h1>
      <div className=" flex flex-col overflow-auto w-fill">
        {queries?queries.map((element, index) => {
          return (
            <button
              key={index}
              onClick={()=>{
                setSelectedQuery(element);

              }}
              className={`text-left pl-2 pr-1 text-md border-[1px] break-words border-[#c8c6c6] mt-2 py-1 mx-2 rounded-md hover:bg-[#271BB1] hover:text-white ${selectedQuery === element ? 'bg-[#cfcaf1] border-[1px] font-semibold border-[#282364]':null}`}
            >
              {element}
            </button>
          );
        }):<h1 className="px-4 mt-4 text-gray-500">Choose a table to view corresponding queries!</h1>}
      </div>
    </div>
  );
}

export default QueryList;
