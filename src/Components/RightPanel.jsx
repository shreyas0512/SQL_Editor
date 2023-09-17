import React, { useState } from "react";
import QueryBox from "./QueryBox";
import BottomPanel from "./BottomPanel";
import tableResults from "../utils/ReadTable";

function RightPanel() {
  const [results, setResults] = useState(null);
  const[timeTaken,setTimeTaken]=useState(null);
  const runQuery = async (query) => {
    console.log(query);
    const res = await tableResults(query);
    setResults(res.data);
    setTimeTaken(res.time);
  };

  return (
    <div className="flex flex-col w-[76.2vw] justify-between">
      <QueryBox runQuery={runQuery} timeTaken={timeTaken} />
      <BottomPanel results={results} />
    </div>
  );
}

export default RightPanel;
