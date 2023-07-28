import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap-buttons";

function FetchApi() {

  const [data, setData] = useState([]);

  const apiGet = () => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };

  useEffect(() => {
    apiGet();
  }, []);

  return (
    <div className="App">
      <div>
        <h1>{data.content}</h1>
        <h2> - {data.author}</h2>
        <br />
      </div>
      <Button className="btn btn-primary"
        onClick={apiGet}>Next Quotes</Button>
    </div>
  );
}

export default FetchApi;