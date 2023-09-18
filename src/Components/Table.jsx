import React from "react";
import { useReactTable } from "@tanstack/react-table";

const Table = ({ results }) => {

  return (
    //table format
    results && (
      <table className="table-auto w-full h-full overflow-auto mt-2 rounded-md mx-2 text-md border">
        {results.map((result, rowIndex) => {
          return (
            <tr key={rowIndex}>
              {result.map((data, cellIndex) => {
                // Apply the "bg-blue-500" class only to cells in the first row
                const cellClassName =
                  rowIndex === 0
                    ? "border border-gray-400 px-4 bg-[#271BB1] text-white"
                    : "border border-gray-400 px-1 -py-8";

                return (
                  <td key={cellIndex} className={cellClassName}>
                    {data}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </table>
    )
  );
};

export const MemoizedTable = React.memo(Table);
