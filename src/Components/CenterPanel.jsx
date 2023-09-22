import React, { useEffect, useState } from "react";
import QueryBox from "./QueryBox";
import BottomPanel from "./BottomPanel";
import tableResults from "../utils/ReadTable";
import { UserRole } from "../Contexts/UserContext";

function CenterPanel() {
  const [results, setResults] = useState(null);
  const [timeTaken, setTimeTaken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState(null);
  const { role } = UserRole();
  const runQuery = async (query) => {
    const res = await tableResults(query);
    setLoading(false);
    setResults(res.data);
    setSize(res.data.length);
    setTimeTaken(res.time);
  };

  useEffect(() => {
    setResults(null);
    setTimeTaken(null);
    setSize(null);
  }
  , [role]);
  return (
    <div className="flex h-full flex-col sm:w-[50.2vw] w-[91vw] ml-4 !mr-4 justify-between">
      <QueryBox runQuery={runQuery} loading={loading} setLoading={setLoading} timeTaken={timeTaken} size={size}    />
      <BottomPanel results={results} loading={loading}  />
    </div>
  );
}

export default CenterPanel;
