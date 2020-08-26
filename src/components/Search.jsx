import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: grey;
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
