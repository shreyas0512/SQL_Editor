import React, { useEffect, useState } from "react";

const Table = ({ results }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const data = results.slice(1, results.length);

  useEffect(() => {
    setCurrentPage(1);
  }, [results]);

  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const noofpages = Math.ceil(results.length / rowsPerPage);

  return (
    currentRows && (
      <div className="flex flex-col">
        <div className="sm:fixed mt-2  sm:-mt-9 ml-4 flex">
          {currentPage !== 1 && (
            <button
              onClick={() => paginate(currentPage - 1)}
              className={`mx-1 sm:px-4 px-1 sm:py-1 py-0.5 rounded-md ${
                currentPage === 1 ? "bg-white" : "bg-[#271BB1] text-white"
              }`}
            >
              Prev
            </button>
          )}
          <button
            onClick={() => paginate(1)}
            className={`mx-1 sm:px-4 px-1 sm:py-1 py-0.5 rounded-md ${
              currentPage === 1 ? "bg-white" : "bg-[#271BB1] text-white"
            }`}
          >
            Start
          </button>
          <h1 className="h-fill w-fill bg-white px-4 rounded-lg">
            {currentPage}
          </h1>
          {currentPage !== noofpages && (
            <button
              onClick={() => paginate(noofpages)}
              className={`mx-1 sm:px-4 px-1 sm:py-1 py-0.5 rounded-md ${
                currentPage === noofpages
                  ? "bg-white"
                  : "bg-[#271BB1] text-white"
              }`}
            >
              End
            </button>
          )}
          {currentPage !== noofpages && (
            <button
              onClick={() => paginate(currentPage + 1)}
              className={` sm:px-4 px-1 sm:py-1 py-0.5 rounded-md ${
                currentPage === noofpages
                  ? "bg-white"
                  : "bg-[#271BB1] text-white"
              }`}
            >
              Next
            </button>
          )}
        </div>
        <table className="table-auto w-full h-full overflow-auto mt-2 rounded-md mx-2 text-md border">
          <thead>
            <tr>
              {results[0].map((heading, index) => {
                return (
                  <th
                    key={index}
                    className="border border-gray-400 px-4 bg-[#271BB1] text-white w-[200px] sm:text-lg text-sm"
                  >
                    {heading}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="">
            {currentRows.map((row, index) => {
              return (
                <tr key={index} className="">
                  {row.map((element, index) => {
                    return (
                      <td
                        key={index}
                        className="border border-gray-400 px-2 h-[50px] bg-[#edebf9] w-[200px] sm:text-[15px] text-xs"
                      >
                        {element}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    )
  );
};

export const MemoizedTable = React.memo(Table);
