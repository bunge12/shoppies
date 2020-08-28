import React, { useState } from "react";
import styled from "styled-components";
import icon from "../img/search.svg";

const Container = styled.div`
  padding: 1.5rem;
  background-color: white;
  border-radius: 5px;
  border: 1px #dbe0e4;
  box-shadow: 0 0 2px #dbe0e4;
`;

const SearchBar = styled.input`
  display: block;
  width: calc(100% - 2.5rem);
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 2.5rem;
  background-image: url(${icon});
  background-repeat: no-repeat;
  background-position: 2% center;
  border-radius: 5px;
  border: 1px solid #c7d0d5;
`;

const Title = styled.div``;

export default function Search(props) {
  const informApp = props.callback;
  const [search, setSearch] = useState("");
  const searchFunction = (event) => {
    setSearch(event.target.value);
    informApp(event.target.value);
  };

  return (
    <Container>
      <Title>Movie title:</Title>
      <SearchBar
        key={"searchbar"}
        type="text"
        placeholder="Enter movie title"
        id="name-input"
        value={search}
        onChange={searchFunction}
      />
    </Container>
  );
}
