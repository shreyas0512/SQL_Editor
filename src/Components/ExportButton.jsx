import React, { useEffect } from 'react'
import { jsonToCSV } from "react-papaparse";
import { useState } from 'react';

function ExportButton({results}) {
    const [exportbutton, setExportButton] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
    if(window.innerWidth<768){
      setIsMobile(true);
    }
    else{
      setIsMobile(false);
    }
    }, []);
    const exportCSV = (results) => {
        setExportButton(true);
      const csv = jsonToCSV(results);
      const blob = new Blob([csv], { type: "text/csv" });
      const href = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = href;
      link.download = "data.csv";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setExportButton(false);
        };
  return (
    <button disabled={exportbutton} className="ml-4 text-xs sm:text-sm bg-blue text-white rounded-md self-end mr-4 my-2 px-2 h-6 mt-3" onClick={()=>{exportCSV(results)}}>{!isMobile?`Export as CSV`:"Export"}</button>
  )
}

export default ExportButton