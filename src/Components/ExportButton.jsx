import React, { useEffect } from "react";
import { useState } from "react";

function ExportButton({ results,link }) {
  const [exportbutton, setExportButton] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);
  const exportCSV = (link) => {
 //download given link file directly
    const linkelem = document.createElement("a");
    linkelem.href = link;
    linkelem.click();
  };
  return (
    <button
      disabled={exportbutton}
      className="ml-4 text-xs sm:text-sm bg-blue text-white rounded-md self-end mr-4 my-2 px-2 h-6 mt-3"
      onClick={
        () => {
          if (results) {
            setExportButton(true);
            exportCSV(link);
            setExportButton(false);
          }
        }
      }
    >
      {!isMobile ? `Export as CSV` : "Export"}
    </button>
  );
}

export default ExportButton;
