import React, { createContext } from "react";
import useFetch from "../hooks/useFetch";
import { GetBookData } from "../service/book.service";

export const ApiContext = createContext({
  data: null,
  error: null,
  loading: false,
});

const ApiContextProvider = ({ children }) => {
  const { data, error, loading } = useFetch(GetBookData, "book");
  return <ApiContext.Provider value={{loading,error,data}}>{children}</ApiContext.Provider>;
};

export default ApiContextProvider;
