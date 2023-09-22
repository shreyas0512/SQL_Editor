import React, { useEffect, useState } from "react";
import ExportButton from "./ExportButton";


const Table = ({ results,currentRows }) => {
  return (
    currentRows && (
      <div className="flex flex-col">
        <table className="table-auto w-full h-full overflow-auto mt-2 rounded-md mx-2 text-md border">
          <thead>
            <tr>
              {results[0].map((heading, index) => {
                return (
                  <th
                    key={index}
                    className="border border-gray-400 px-4 bg-blue text-white w-[200px] sm:text-lg text-sm"
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
