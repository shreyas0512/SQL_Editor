import { useState } from "react";
import { Header } from "./Components/Header";
import LeftPanel from "./Components/LeftPanel";
import QueryBox from "./Components/QueryBox";
import BottomPanel from "./Components/BottomPanel";
import CenterPanel from "./Components/CenterPanel";
import { UserContextProvider } from "./Contexts/UserContext";
import { TableContextProvider } from "./Contexts/TableContext";
import RightPanel from "./Components/RightPanel";
function App() {
  return (
    <UserContextProvider>
      <div className="w-screen h-screen overflow-x-hidden bg-no-repeat  bg-[#edeff1]">
        <Header />
        <TableContextProvider>
          <div className="flex sm:flex-row flex-col items-center h-[82vh] sm:w-screen mt-4 justify-between">
            <LeftPanel />
            <CenterPanel />
            <RightPanel />
          </div>
        </TableContextProvider>
      </div>
    </UserContextProvider>
  );
}

export default App;
