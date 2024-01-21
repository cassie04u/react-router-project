import React, { useEffect, useState } from "react";
import { GetBookData } from "./service/book.service";

const App = () => {
  const [fetch, setFetch] = useState(null);
  useEffect(() => {
    (async () => {
      const data = await GetBookData("book");
      // console.log(data);
      setFetch(data);
    })();
  }, []);
  return <div>{fetch && <>{JSON.stringify(fetch)}</>}</div>;
};

export default App;
