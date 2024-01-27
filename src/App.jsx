import React from "react";
import { GetBookData } from "./service/book.service";
import useFetch from "./hooks/useFetch";
import { Routes, Route } from "react-router-dom";
import {  DetailBookPage, HomePage } from "./Page";
import { NavComponent } from "./components";
import NotFound from "./Not-Found";

const App = () => {
  const { loading, error, data } = useFetch(GetBookData, "book");
  return (
    // <div>
    //   {loading ? (
    //     <h1>Loading...</h1>
    //   ) : (
    //     <>
    //       {data ? (
    //         <div>{JSON.stringify(data)}</div>
    //       ) : (
    //         <h1>{error}</h1>
    //       )}
    //     </>
    //   )}
    // </div>
    <div className="main">
      <NavComponent />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/detail/:id" element={<DetailBookPage/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
};

export default App;

// custom hook
// => built in hook => useState, useEffect, useRef, useReducer, useLayoutEffect, useId, useTransition, useCallback, useMemo, etc..
// => lib provide hook => useParams, useNavigate, useLocation, useSearchParams
// => useFetch
