import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  padding: 1.5rem;
  background-color: white;
  border-radius: 5px;
  border: 1px #dbe0e4;
  box-shadow: 0 0 2px #dbe0e4;
  width: 43%;
`;

const Single = styled.li`
  padding: 0.5rem;
`;
const List = styled.ul``;

export default function Results(props) {
  let searchResult = <Single key={"none"}>Search some movies!</Single>;
  props.data &&
    (searchResult = props.data.map((each, index) => (
      <>
        <Single key={[each.Title, each.Year]}>
          {each.Title} ({each.Year})
          <Button
            key={[index, each.Title, each.Year]}
            name="Nominate"
            callback={props.callback}
            value={`${each.Title}^${each.Year}`}
          ></Button>
        </Single>
      </>
    )));

  return (
    <Container key={"r"}>
      <b>
        {props.term === ""
          ? "Search for some movies!"
          : `Results for "${props.term}":`}
      </b>

      <List>{searchResult}</List>
    </Container>
  );
}
