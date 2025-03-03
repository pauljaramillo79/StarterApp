import React, { useEffect, useState } from "react";
// import axios from "./api/axios";
import axios from "axios";

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    async function fetchdata() {
      // const response = await axios.get("/");
      const response = await axios.get("https://www.wgsitetest.com/");
      setData(response.data);
    }
    fetchdata();
  }, []);
  return <div>{data}</div>;
}

export default App;
