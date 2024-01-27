import React from "react";
import useFetch from "../hooks/useFetch";
import { GetBookData } from "../service/book.service";
import { BookListComponent } from "../components";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { loading, data, error } = useFetch(GetBookData, "book");
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="flex flex-wrap justify-between mx-12 ">
          {data.map((i) => (
            <Link key={i.id} to={`/detail/${i.id}`}>
              <BookListComponent data={i} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
