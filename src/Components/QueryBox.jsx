import React, { useEffect, useRef } from "react";
import { useMemo, useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import sql from "react-syntax-highlighter/dist/esm/languages/hljs/sql";
import { CurrTable } from "../Contexts/TableContext";

SyntaxHighlighter.registerLanguage("sql", sql);
function QueryBox(props) {
  const [query, setQuery] = useState("");
  const textref = useRef(null);
  const {
    selectedTable,
    selectedQuery,
    setSelectedQuery,
    savedQueries,
    setSavedQueries,
    savedClicked,
    setSavedClicked,
  } = CurrTable();

  useEffect(() => {
    if (selectedTable && !savedClicked) {
      setQuery(`SELECT * FROM ${selectedTable.name.toUpperCase()};`);
      setSelectedQuery(`SELECT * FROM ${selectedTable.name.toUpperCase()};`);
    }
  }, [selectedTable]);
  useEffect(() => {
    if (selectedQuery) {
      setQuery(selectedQuery);
      setSavedClicked(false);
    }
  }, [selectedQuery]);
  const handleRun = async () => {
    if (query.startsWith("SELECT * FROM")) {
      props.runQuery(selectedTable.link);
    } else if (
      query === "SELECT CUSTOMERID,CONTACTNAME FROM CUSTOMERS;" &&
      selectedTable.name === "customers"
    ) {
      props.runQuery(
        "https://raw.githubusercontent.com/shreyas0512/csv_files/main/customers.csv"
      );
    } else if (
      query === "SELECT CUSTOMERID FROM CUSTOMERS;" &&
      selectedTable.name === "customers"
    ) {
      props.runQuery(
        "https://raw.githubusercontent.com/shreyas0512/csv_files/main/customers1.csv"
      );
    } else if (
      query === "SELECT EMPLOYEEID, LASTNAME, FIRSTNAME FROM EMPLOYEES;" &&
      selectedTable.name === "employees"
    ) {
      props.runQuery(
        "https://raw.githubusercontent.com/shreyas0512/csv_files/main/employees.csv"
      );
    } else if (
      query === "SELECT EMPLOYEEID FROM EMPLOYEES;" &&
      selectedTable.name === "employees"
    ) {
      props.runQuery(
        "https://raw.githubusercontent.com/shreyas0512/csv_files/main/employees1.csv"
      );
    } else {
      alert("Invalid Query! Please choose from the list of available queries.");
    }
  };
  //run the csv function

  return (
    <div className="flex flex-col sm:mr-4 sm:mt-0 mt-4 w-full">
      <label htmlFor="query" className="sr-only">
        Query
      </label>
      <textarea
        id="query"
        ref={textref}
        value={query}
        className="h-[20vh]  sm:w-[56.2vw] w-[91vw] mr-8 text-lg resize-none  p-2 font-mono caret-black outline-none border-[1.3px] border-[#C7C5C5] bg-[#f9f8ff]"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      ></textarea>
      <div className="flex sm:w-full w-[91vw] justify-between">
        <div className="self-start">
          {props.timeTaken && (
            <h4 className="self-start sm:text-lg text-xs mt-2 ">
              Time Taken: {props.timeTaken / 1000.0} seconds for{" "}
              {props.size - 2} rows
            </h4>
          )}
        </div>
        <div className="mt-2 flex self-end sm:space-x-8 space-x-4">
          <button
            className="self-end border-[1.5px] border-[#271BB1] sm:px-8 px-4 rounded-md text-[#271BB1] font-bold py-1 sm:text-lg text-xs"
            onClick={() => {
              const newQuery = {
                query: query,
                table: selectedTable,
              };
              setSavedQueries([...savedQueries, newQuery]);
            }}
          >
            Save
          </button>
          <button
            className="self-end border-[1.5px] bg-[#271BB1] sm:px-8 px-4 rounded-md text-white font-bold py-1 sm:text-lg text-xs"
            onClick={async () => {
              handleRun();
            }}
          >
            Run
          </button>
        </div>
      </div>
    </div>
  );
}

export default QueryBox;
