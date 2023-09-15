import React, { useEffect, useState } from "react";
import { usePapaParse } from "react-papaparse";
import tableResults from "../utils/ReadTable";

function Table(props) {
 


  return (
    //table format
    props.results && <table className="table-auto w-full h-full overflow-auto ">
      {props.results.map((result, index) => {
        return (
          <tr key={index}>
            {result.map((data, index) => {
              return (
                <td key={index} className="border border-gray-400 px-4 py-2">
                  {data}
                </td>
              );
            })}
          </tr>
        )
      })}
    </table>
    
    );
}


export default Table;
