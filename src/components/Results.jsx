import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: grey;
  width: 45%;
`;

const Single = styled.li``;
const List = styled.ul``;

export default function Results(props) {
  let searchResult = <Single>Search some movies!</Single>;
  props.data &&
    (searchResult = props.data.map((each, index) => (
      <Single key={index}>{each.Title}</Single>
    )));

  return (
    <Container>
      Search results:
      <List>{searchResult}</List>
    </Container>
  );
}
