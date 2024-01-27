import React from "react";
import useFetch from "../../hooks/useFetch";
import { GetBookData } from "../../service/book.service";
import { useParams, useNavigate } from "react-router-dom";

const DetailBookPage = () => {
  const { id } = useParams();
  const { loading, data, error } = useFetch(GetBookData, `book/${id}`);
  const nav = useNavigate();
  const handleBack = () => {
    nav(-1)
  }
  return (
    <div className="">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {error ? (
            <h1>Error</h1>
          ) : (
            <div className="pb-5">
              {" "}
              <div className=" p-3 ;7 ">
                <div className="pb-3">
                  <img className=" h-[300px] " src={data.img} alt="" />
                </div>
                <div className="pb-2">
                  <h1 className=" font-bold text-2xl text-[#144872]">
                    {data.title}
                  </h1>
                  <h2 className=" font-semibold text-lg text-[#ffb559]">
                    {data.author}
                  </h2>
                </div>
                <div className=" h-12">
                  <p className=" text-[16px] text-slate-500">{data.description}</p>
                </div>
                <button onClick={handleBack} className=" w-20 bg-[#5887bf] px-3 py-2 text-sm text-white rounded-md hover:bg-[#144872] duration-200">
                  Back 
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DetailBookPage;
