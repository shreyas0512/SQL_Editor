import React, { useEffect, useRef } from "react";
import { useMemo, useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import sql from "react-syntax-highlighter/dist/esm/languages/hljs/sql";
import { CurrTable } from "../Contexts/TableContext";

SyntaxHighlighter.registerLanguage("sql", sql);
function QueryBox(props) {
  const [query, setQuery] = useState("");
  const textref=useRef(null);
  const{selectedTable,selectedQuery}=CurrTable();

  useEffect(() => {
    if (selectedTable) {
      setQuery(`SELECT * FROM ${selectedTable.name.toUpperCase()};`);
    }
  }, [selectedTable]);
  useEffect(() => {
    if (selectedQuery) {
      setQuery(selectedQuery);
    }
  }, [selectedQuery]);
  const handleRun = async () => {
     if(query.startsWith("SELECT * FROM")){
      props.runQuery(selectedTable.link);
      console.log("function ran");
    }
  };
    //run the csv function
  

  return (
    <div className="flex flex-col mr-4">
      <SyntaxHighlighter language="sql" style={docco} className='bg-[#F7F7F7] text-lg h-[20vh] w-[75.2vw] overflow-hidden  border-[1.3px] border-[#C7C5C5] px-4 py-2 focus:outline-none resize-none'>
        {query}
      </SyntaxHighlighter>
      <textarea
        ref={textref}
        value={query}
        className="h-[20vh]  w-[75.2vw] text-lg resize-none bg-transparent p-2 font-mono text-transparent caret-black outline-none absolute"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      ></textarea>
      <div className="flex w-full justify-between">
      <div className="self-start">
      {props.timeTaken && <h4 className="self-start">Time Taken: {props.timeTaken/1000.0} seconds</h4>}
      </div>
      <div className="space-x-8 mt-2 flex self-end">
        
        <button className="self-end border-[1.5px] border-[#271BB1] px-8 rounded-md text-[#271BB1] font-bold py-1">
          Save
        </button>
        <button
          className="self-end border-[1.5px] bg-[#271BB1] px-8 rounded-md text-white font-bold py-1"
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
