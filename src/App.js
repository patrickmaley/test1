import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Image from "react-bootstrap/Image";
import BrandBar from "./components/BrandBar.jsx";

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <header className="App-header" style={{ backgroundColor: "#202020" }}>
        <BrandBar />
      </header>
    </div>
  );
}

export default App;
