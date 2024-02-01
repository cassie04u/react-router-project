import React, { useEffect } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const { state } = useLocation();
  console.log(state);
  const nav = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("auth");
    console.log(data);
    if (!data) {
      nav("/admin")
    }
  }, []);

  return (
    <div className=" grid grid-cols-10 mx-12 my-7 gap-x-5">
      <div className=" col-span-2">
        <h1>{state?.data?.email}</h1>

        <ul>
          <Link to="/dashboard">
            <li>Dashboard</li>
          </Link>
          {/* <Link to="/dashboard/inventory">
            <li>Inventory</li>
          </Link> */}
          <Link to="/dashboard/user">
            <li>User</li>
          </Link>
          <Link to="/dashboard/blog">
            <li>Blog</li>
          </Link>
        </ul>
      </div>
      <div className=" col-span-8">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardPage;
