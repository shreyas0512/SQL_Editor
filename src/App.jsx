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
      <div className="w-screen h-screen overflow-auto bg-no-repeat  bg-[#edeff1]">
        <Header />
        <TableContextProvider>
          <div className="flex h-[82vh] mt-4 space-x-8 justify-between">
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
