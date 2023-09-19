import React, { useState } from "react";
import QueryBox from "./QueryBox";
import BottomPanel from "./BottomPanel";
import tableResults from "../utils/ReadTable";

function CenterPanel() {
  const [results, setResults] = useState(null);
  const [timeTaken, setTimeTaken] = useState(null);
  const [size, setSize] = useState(null);
  const runQuery = async (query) => {
    const res = await tableResults(query);
    setResults(res.data);
    setSize(res.data.length);
    setTimeTaken(res.time);
  };

  return (
    <div className="flex h-full flex-col sm:w-[50.2vw] w-[91vw] ml-4 !mr-4 justify-between">
      <QueryBox runQuery={runQuery} timeTaken={timeTaken} size={size} />
      <BottomPanel results={results} />
    </div>
  );
}

export default CenterPanel;
