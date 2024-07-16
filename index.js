import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Card from "./Card.js";
import Seriesdata from "./Seriesdata";

function ncard(val , index) {
  return (
    <Card
      key = {val.id}
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <React.StrictMode>
      <App />
    </React.StrictMode>

    <h1 className="heading_style"> List of best Sflix series</h1>

    {Seriesdata.map(ncard)}
  </>
);
