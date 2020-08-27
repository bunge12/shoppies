import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 1.5rem;
  background-color: white;
  border-radius: 5px;
  border: 1px #dbe0e4;
  box-shadow: 0 0 2px #dbe0e4;
`;

const SearchBar = styled.input`
  display: block;
`;

export default function Search(props) {
  const informApp = props.callback;
  const [search, setSearch] = useState("");
  const searchFunction = (event) => {
    setSearch(event.target.value);
    informApp(event.target.value);
  };

  return (
    <Container>
      Search for movies:
      <SearchBar
        type="text"
        placeholder="Enter movie title"
        id="name-input"
        value={search}
        onChange={searchFunction}
      />
    </Container>
  );
}
