import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ApiContext } from "../../store/ApiContext";

const DetailBookPage = () => {
  const { slug } = useParams();
  console.log(slug);

  const { loading, data, error } = useContext(ApiContext);
  const nav = useNavigate();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const finder = data?.find((i) => i.slug === slug);
    console.log(finder);
    setItem(finder);
  }, [slug, data]);
  // const { id } = useParams();
  // const { loading, data, error } = useFetch(GetBookData, `book/${id}`);
  const handleBack = () => {
    nav(-1);
  };

  return (
    <div className=" mx-12">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {error ? (
            <h1>Error</h1>
          ) : (
            <div className="pb-5">
              {" "}
              <div className=" p-3  ">
                <div className="pb-3">
                  <img className=" h-[300px] " src={item?.img} alt="" />
                </div>
                <div className="pb-2">
                  <h1 className=" font-bold text-2xl text-[#144872]">
                    {item?.title}
                  </h1>
                  <h2 className=" font-semibold text-lg text-[#ffb559]">
                    {item?.author}
                  </h2>
                </div>
                <div className=" pb-5">
                  <p className=" text-[16px] text-slate-500">
                    {item?.description}
                  </p>
                </div>
                <button
                  onClick={handleBack}
                  className=" w-20 bg-[#5887bf] px-3 py-2 text-sm text-white rounded-md hover:bg-[#144872] duration-200"
                >
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
