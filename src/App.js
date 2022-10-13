import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import datas from "./data/posts";

function App() {
  const cards = datas.map((data) => {
    return <Card {...data} />;
  });
  return (
    <div id="app">
      <Navbar />
      <section className="card-section">{cards}</section>
    </div>
  );
}

export default App;
