import React from "react";
import { MemoizedTable } from "./Table";
import { useState,useEffect } from "react";
import { CurrTable } from "../Contexts/TableContext";
import ExportButton from "./ExportButton";

function BottomPanel(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);


  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const data = props.results?props.results.slice(1, props.results.length - 1):null;

  useEffect(() => {
    setCurrentPage(1);
  }, [props.results]);

  
  const currentRows = data?data.slice(indexOfFirstRow, indexOfLastRow):null;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const noofpages = Math.ceil(props.results?.length / rowsPerPage);


  return (
    <div className="h-[47vh] mb-8 sm:w-full w-[91vw]">
      <button className=" bg-blue text-white border-[1.5px] px-8 py-0.5 -mb-0.5 sm:text-lg text-md font-semibold ml-4 rounded-tl-md rounded-tr-md">
        Output
      </button>
      <div className="h-full w-full overflow-auto border-[1.5px] border-[#C7C5C5] mr-4 rounded-md flex flex-col">
    {props.results && !props.loading && <div className="flex justify-between"> 
      <div className=" mt-3 ml-4 flex h-6">
          <button
            disabled={currentPage === 1}
            onClick={() => paginate(1)}
            className={`mx-1 px-2 text-xs rounded-md ${
              currentPage === 1 ? "bg-white" : "bg-blue text-white"
            }`}
          >
            Start
          </button>
          <button
            disabled={currentPage === 1}
            onClick={() => paginate(currentPage - 1)}
            className={`mx-1 py-[1px] px-1 text-xs rounded-md ${
              currentPage === 1 ? "bg-white" : "bg-blue text-white"
            }`}
          >
            Prev
          </button>

          <h1 className="h-fill w-fill bg-white px-4 rounded-lg">
            {currentPage}
          </h1>
          <button
            disabled={currentPage === noofpages}
            onClick={() => paginate(currentPage + 1)}
            className={`mx-1 py-[1px] px-1 text-xs rounded-md ${
              currentPage === noofpages ? "bg-white" : "bg-blue text-white"
            }`}
          >
            Next
          </button>
          <button
            disabled={currentPage === noofpages}
            onClick={() => paginate(noofpages)}
            className={`mx-1 py-[1px] px-1 text-xs rounded-md ${
              currentPage === noofpages ? "bg-white" : "bg-blue text-white"
            }`}
          >
            End
          </button>  
        </div>
      <ExportButton results={props.results} />
      </div>}
        {!props.loading ?<div className="overflow-auto">
          {props.results?<MemoizedTable currentRows={currentRows} results={props.results} />:
          <h1 className="text-xl mt-20 text-gray-700 text-center">Click Run to view Output!</h1>}
        </div>:
        <div className="flex justify-center items-center h-full">
          <div className="animate-spin rounded-full h-24 w-24 border-t-[3px] border-b-[3px] border-gray-400"></div>
        </div>
          }
      </div>
    </div>
  );
}

export default React.memo(BottomPanel);
