import React, { useState } from "react";
import QueryBox from "./QueryBox";
import BottomPanel from "./BottomPanel";
import tableResults from "../utils/ReadTable";

function CenterPanel() {
  console.log("right panel");
  const [results, setResults] = useState(null);
  console.log(results + "in right panel");
  const [timeTaken, setTimeTaken] = useState(null);
  const runQuery = async (query) => {
    console.log(query);
    const res = await tableResults(query);
    setResults(res.data);
    setTimeTaken(res.time);
  };

  return (
    <div className="flex flex-col w-[56.2vw]">
      <QueryBox runQuery={runQuery} timeTaken={timeTaken} />
      <BottomPanel results={results} />
    </div>
  );
}

export default CenterPanel;
