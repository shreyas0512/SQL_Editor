import React, { useEffect, useRef } from "react";
import { useMemo, useState } from "react";
import { CurrTable } from "../Contexts/TableContext";
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
  async function handleRun() {

    if(query===`SELECT * FROM ${selectedTable.name.toUpperCase()};`){
      props.setLoading(true);
      props.runQuery(selectedTable.link);
      props.setLink(selectedTable.link);

    }
   else if (
      query === "SELECT CUSTOMERID,CONTACTNAME FROM CUSTOMERS;" &&
      selectedTable.name === "customers"
    ) {
      props.setLoading(true);
      props.runQuery("https://csv-files.vercel.app/customers.csv");
      props.setLink("https://csv-files.vercel.app/customers.csv");
    } else if (
      query === "SELECT CUSTOMERID FROM CUSTOMERS;" &&
      selectedTable.name === "customers"
    ) {
      props.runQuery("https://csv-files.vercel.app/customers1.csv");
      props.setLink("https://csv-files.vercel.app/customers1.csv");
    } else if (
      query === "SELECT EMPLOYEEID, LASTNAME, FIRSTNAME FROM EMPLOYEES;" &&
      selectedTable.name === "employees"
    ) {
      props.setLoading(true);
      props.runQuery("https://csv-files.vercel.app/employees.csv");
      props.setLink("https://csv-files.vercel.app/employees.csv");
    } else if (
      query === "SELECT EMPLOYEEID FROM EMPLOYEES;" &&
      selectedTable.name === "employees"
    ) {
      props.setLoading(true);
      props.runQuery("https://csv-files.vercel.app/employees1.csv");
      props.setLink("https://csv-files.vercel.app/employees1.csv");
    }
      else {
      alert("Invalid Query! Please choose from the list of available queries.");
    }
  }
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
        className="h-[20vh]  sm:w-[50.2vw] w-[91vw] mr-8 text-lg resize-none  p-2 font-mono caret-black outline-none border-[1px] border-[#C7C5C5] bg-[#f9f8ff]"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      ></textarea>
      <div className="flex sm:w-full w-[91vw] justify-between">
        <div className="self-start">
       {!props.loading && props.timeTaken && <h1 className="mt-2 sm:text-[17px] text-xs p-2">Time Taken: {(props.timeTaken/1000.0).toFixed(3)} seconds for {props.size-2} rows</h1>}
        </div>
        <div className="mt-2 flex self-end sm:space-x-8 space-x-4">
         
          <button
            className="self-end border-[1px] border-blue sm:px-8 px-4 rounded-md text-blue font-bold py-1 sm:text-lg text-xs"
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
          <button disabled={props.loading}
            className="self-end border-[1.5px] bg-blue sm:px-8 px-4 rounded-md text-white font-bold py-1 sm:text-lg text-xs"
            onClick={handleRun}
          >
            Run
          </button>
        </div>
      </div>
    </div>
  );
}

export default QueryBox;
