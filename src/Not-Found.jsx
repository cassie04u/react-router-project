import React from "react";


const NotFound = () => {
  return (
    <div className="  ">
      <div className=" flex flex-col justify-center items-center  ">
        <img
          className="w-[500px] "
          src="https://jjewellery.vercel.app/assets/404-230ef5c9.png"
          alt=""
        />
        <a href="/" className=" bg-red-300 hover:bg-red-400 hover:text-white duration-300 rounded-lg px-3 py-2">
          Go Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
