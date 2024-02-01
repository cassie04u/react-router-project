import React from "react";
import { GetBookData } from "./service/book.service";
import useFetch from "./hooks/useFetch";
import { Routes, Route } from "react-router-dom";
import {
  AdminPage,
  BlogPage,
  DashboardPage,
  DetailBookPage,
  HomePage,
  InventoryPage,
  UserPage,
} from "./Page";
import { NavComponent } from "./components";
import NotFound from "./Not-Found";
import RegisterPage from "./Page/admin/Register.page";

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
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/detail/:id" element={<DetailBookPage />} /> */}
        <Route path="/detail/:slug" element={<DetailBookPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/dashboard" element={<DashboardPage />}>
          {/* <Route path="inventory" element={<InventoryPage />} /> */}
          <Route index element={<InventoryPage />} />
          <Route path="user" element={<UserPage />} />
          <Route path="blog" element={<BlogPage />} />
        </Route>
        <Route path="admin" element={<AdminPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
};

export default App;

// custom hook
// => built in hook => useState, useEffect, useRef, useReducer, useLayoutEffect, useId, useTransition, useCallback, useMemo, etc..
// => lib provide hook => useParams, useNavigate, useLocation, useSearchParams
// => useFetch
