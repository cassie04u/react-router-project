import React from "react";
import { Link } from "react-router-dom";
import BookListComponent from "./BookList.component";

const NavComponent = () => {
  return (
    <nav className="flex justify-between mx-12">
      <img
        className=" w-32 h-18"
        src="https://i.pinimg.com/564x/e2/cc/7b/e2cc7b80235a1a47be0d292d6c200f9f.jpg"
        alt=""
      />
      <ol className="flex justify-between items-center gap-x-4">
        <li className=" text-lg text-[#144872] font-bold hover:text-[#ffb559] duration-200">
          <Link to={"/"}>Home</Link>
        </li>

        
        
        <li className=" text-lg text-[#144872] font-bold hover:text-[#ffb559] duration-200">
          <Link to={"/profile"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </Link>
        </li>

        <li className=" text-[15px] text-[#144872] font-semibold hover:text-[#ffb559] duration-200">
          <Link to={"/register"}>Sign Up</Link>
        </li>
        {/* <li>
          <Link>Book1</Link>
        </li> */}
      </ol>
    </nav>
  );
};

export default NavComponent;
