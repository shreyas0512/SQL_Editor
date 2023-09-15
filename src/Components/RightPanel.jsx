import React from "react";
import QueryBox from "./QueryBox";
import BottomPanel from "./BottomPanel";
import tableResults from "../utils/ReadTable";
import { useState ,useMemo} from "react";
function RightPanel() {
  const [results, setResults] = useState(null);
  const runQuery = (query) => {
    console.log(query);
    tableResults().then((res) => {
      setResults(res);
    });
  };
  const displayOutput = () => {
    console.log("display output");
  };

  return (
    <div className="flex flex-col w-[76.2vw] justify-between">
      <QueryBox runQuery={runQuery} />
      <BottomPanel results={results} />
    </div>
  );
}

export default RightPanel;
