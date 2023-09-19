import React, { useEffect,useState } from "react";
import { CurrTable } from "../Contexts/TableContext";
import {columns1,columns2,columns3} from "../utils/data";

function Columns() {
  
  const { selectedTable } = CurrTable();
  const[selectedColumns,setSelectedColumns]=useState([]);
  useEffect(() => {
    if (selectedTable.name==="customers") {
      setSelectedColumns(columns1);
    }else if(selectedTable.name==="employees"){
      setSelectedColumns(columns2);
    }
    else{
      setSelectedColumns(columns3);
    }
  }, [selectedTable]);


  
  return (
    <div className="h-1/2 flex flex-col">
      <h1 className="text-center font-semibold text-xl">Columns</h1>
      <div className="overflow-auto">
      {selectedColumns.map((data,index) => {
        return (
          <div key={index} className="flex flex-col border-gray-300 px-1 py-2 my-2 border-[1.5px] mx-2 rounded-md ">
            <div className="flex justify-between px-2">
              <h1 className="text-left font-medium text-lg">
                {data.columnName}
              </h1>
              <h2>{data.dataType}</h2>
            </div>

            <h3 className="px-2">{data.primaryKey && "Primary Key"}</h3>
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default Columns;
