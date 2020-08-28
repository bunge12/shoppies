import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Search from "./components/Search";
import Results from "./components/Results";
import Nominations from "./components/Nominations";
import styled from "styled-components";

const Columns = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`;

function App() {
  const [nominations, setNominations] = useState([]);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState({});
  const searchCallback = (data) => {
    console.log(data);
    setSearch(data);
    axios
      .get(`http://www.omdbapi.com/?apikey=789b871e&type=movie&s=${data}`)
      .then((data) => {
        console.log(data.data);
        setResults(data.data);
      });
  };
  const nominate = (data) => {
    const movieInfo = data.split(",");
    setNominations([
      ...nominations,
      { Title: movieInfo[0], Year: movieInfo[1] },
    ]);
    console.log(nominations);
  };
  const remove = (data) => {
    nominations.splice(data, 1);
    setNominations([...nominations]);
  };
  return (
    <div className="App">
      <h1>The Shoppies</h1>
      <Search callback={searchCallback}></Search>
      <Columns>
        <Results
          term={search}
          data={results["Search"]}
          callback={nominate}
        ></Results>
        <Nominations data={nominations} callback={remove}></Nominations>
      </Columns>
    </div>
  );
}

export default App;

// https://dev.to/selbekk/persisting-your-react-state-in-9-lines-of-code-9go
