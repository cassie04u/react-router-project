import React from "react";

const BookListComponent = ({data}) => {
  console.log(data);
  return (
    <div className="w-[300px] h-[460px] p-3 hover:shadow hover:shadow-slate-700 hover:translate-y-3  duration-500 border border-slate-700 my-7 ">
      <div className="pb-3" >
        <img className="h-[250px] w-[300px] " src={data.img} alt="" />
      </div>
      <div className="pb-2">
        <h1 className=" font-bold text-[15px] text-[#144872]">{data.title}</h1>
        <h2 className=" font-semibold text-sm text-[#ffb559]">{data.author}</h2>
      </div>
      <div className=" h-[95px]">
        <p className=" text-sm text-slate-500">{data.description}</p>
      </div>
      <button className=" bg-[#5887bf] px-3 py-1 text-[13px] text-white rounded-md hover:bg-[#144872] duration-200">Read More</button>
    </div>
  );
};

export default BookListComponent;
