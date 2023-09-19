import { createContext, useContext, useState } from "react";

const TableContext = createContext();
export const TableContextProvider = ({ children }) => {
  const [selectedTable, setSelectedTable] = useState({
    link: '"https://csv-files.vercel.app/customers0.csv',
    name: "customers",
  });
  const [selectedQuery, setSelectedQuery] = useState("");
  const [savedQueries, setSavedQueries] = useState([]);
  const [savedClicked, setSavedClicked] = useState(false);
  return (
    <TableContext.Provider
      value={{
        selectedTable,
        setSelectedTable,
        selectedQuery,
        setSelectedQuery,
        savedQueries,
        setSavedQueries,
        savedClicked,
        setSavedClicked,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

export const CurrTable = () => {
  return useContext(TableContext);
};
