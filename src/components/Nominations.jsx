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

const Single = styled.li`
  padding: 0.5rem;
`;
const List = styled.ul``;

export default function Nominations(props) {
  // const remove = (event) => {
  //   // props.callback
  //   console.log(event.target.value);
  // };
  let list = <Single>Select some movies to nominate!</Single>;
  props.data.length > 0 &&
    (list = props.data.map((each, index) => (
      <Single key={["nom", index]}>
        {each.Title} ({each.Year})
        <Button
          key={[index, each.Title, each.Year]}
          name="Remove"
          callback={props.callback}
          value={`${index}^${each.Title}^${each.Year}`}
        ></Button>
      </Single>
    )));

  return (
    <Container>
      <b>Nominations:</b>
      <List>{list}</List>
      {props.data.length === 5 && (
        <Info>You've reached 5 possible nominations!</Info>
      )}
    </Container>
  );
}
