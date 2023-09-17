import { createContext, useContext, useState } from "react";

const TableContext = createContext();
export const TableContextProvider = ({ children }) => {
  const [selectedTable, setSelectedTable] = useState("");
  const [selectedQuery, setSelectedQuery] = useState("");
  return (
    <TableContext.Provider
      value={{
        selectedTable,
        setSelectedTable,
        selectedQuery,
        setSelectedQuery,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

export const CurrTable = () => {
  return useContext(TableContext);
};
