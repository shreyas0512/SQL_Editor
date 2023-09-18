import { createContext, useContext, useState } from "react";

const TableContext = createContext();
export const TableContextProvider = ({ children }) => {
  const [selectedTable, setSelectedTable] = useState("");
  const [selectedQuery, setSelectedQuery] = useState("");
  const [savedQueries, setSavedQueries] = useState(["test", "test2"]);
  return (
    <TableContext.Provider
      value={{
        selectedTable,
        setSelectedTable,
        selectedQuery,
        setSelectedQuery,
        savedQueries,
        setSavedQueries,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

export const CurrTable = () => {
  return useContext(TableContext);
};
