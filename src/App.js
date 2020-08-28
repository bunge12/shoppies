import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Search from "./components/Search";
import Results from "./components/Results";
import Nominations from "./components/Nominations";

function App() {
  const [nominations, setNominations] = useState([]);
  // const [search, setSearch] = useState("");
  const [results, setResults] = useState({});
  const searchCallback = (data) => {
    console.log(data);
    axios
      .get(`http://www.omdbapi.com/?apikey=789b871e&type=movie&s=${data}`)
      .then((data) => {
        console.log(data.data);
        setResults(data.data);
      });
  };
  return (
    <div className="App">
      Shoppies
      <Search callback={searchCallback}></Search>
      <Results data={results["Search"]}></Results>
      <Nominations data={nominations}></Nominations>
    </div>
  );
}

export default App;

// https://dev.to/selbekk/persisting-your-react-state-in-9-lines-of-code-9go
