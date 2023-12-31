import React, { useEffect } from "react";
import { CurrTable } from "../Contexts/TableContext";

function SavedQueries() {
  const { savedQueries, setSelectedQuery, setSelectedTable, setSavedClicked } =
    CurrTable();
  return (
    <div className="flex flex-col h-1/2 sm:w-[19vw] w-fill">
      <h1 className="text-center font-semibold text-xl">Saved Queries</h1>
      <div className="overflow-auto mb-1 text-center w-fill flex flex-col">
        {savedQueries.length != 0 ? (
          savedQueries.map((element, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  setSelectedQuery(element.query);
                  setSelectedTable(element.table);
                  setSavedClicked(true);
                }}
                className="text-left pl-2 pr-1 sm:w-[17vw] border-[1px] break-words border-[#c8c6c6] mt-2 py-1 mx-2 rounded-md hover:bg-blue hover:text-white text-xs sm:text-sm"
              >
                {element.query}
              </button>
            );
          })
        ) : (
          <h1 className="px-2 mt-8 text-gray-700">
            Choose a query and click save!
          </h1>
        )}
      </div>
    </div>
  );
}

export default SavedQueries;
