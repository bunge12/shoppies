import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: grey;
  width: 45%;
`;

const Single = styled.li``;
const List = styled.ul``;

export default function Nominations(props) {
  let list = <Single>Select some movies to nominate!</Single>;
  props.data &&
    (list = props.data.map((each, index) => (
      <Single key={index}>{each.Title}</Single>
    )));

  return (
    <Container>
      Nominations:
      <List>{list}</List>
    </Container>
  );
}
