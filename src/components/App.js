import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../logo.svg";
import "./App.css";

function App() {
  const url = "http://localhost:5000/tell/tells";
  let [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((res, err) => {
      setData(res.data);
    });
  }, [url]);

  return (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <div>
        {data.map((tell) => {
          return <p key={tell.tid}>{tell.tid}</p>;
        })}
      </div>
    </div>
  );
}

export default App;
