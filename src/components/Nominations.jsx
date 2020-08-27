import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 1.5rem;
  background-color: white;
  border-radius: 5px;
  border: 1px #dbe0e4;
  box-shadow: 0 0 2px #dbe0e4;
  width: 45%;
`;

const Info = styled.div`
  color: #856404;
  background-color: #fff3cd;
  border-color: #ffeeba;
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
`;

const Single = styled.li``;
const List = styled.ul``;

export default function Nominations(props) {
  let list = <Single>Select some movies to nominate!</Single>;
  props.data.length > 0 &&
    (list = props.data.map((each, index) => (
      <Single key={index}>
        {each.Title} ({each.Year})
      </Single>
    )));

  return (
    <Container>
      Nominations:
      <List>{list}</List>
      {props.data.length === 5 && (
        <Info>You've reached 5 possible nominations!</Info>
      )}
    </Container>
  );
}
