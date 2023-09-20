import React, { useState } from "react";
import QueryBox from "./QueryBox";
import BottomPanel from "./BottomPanel";
import tableResults from "../utils/ReadTable";
import { CurrTable } from "../Contexts/TableContext";

function CenterPanel() {
  const [results, setResults] = useState(null);
  const [timeTaken, setTimeTaken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState(null);
  const runQuery = async (query) => {
    const res = await tableResults(query);
    setLoading(false);
    setResults(res.data);
    setSize(res.data.length);
    setTimeTaken(res.time);
  };

  const exportCSV = () => {
  }

  return (
    <div className="flex h-full flex-col sm:w-[50.2vw] w-[91vw] ml-4 !mr-4 justify-between">
      <QueryBox runQuery={runQuery} loading={loading} setLoading={setLoading}   />
      <BottomPanel results={results} loading={loading} timeTaken={timeTaken} size={size}  />
    </div>
  );
}

export default CenterPanel;
