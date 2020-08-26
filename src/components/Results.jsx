import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: grey;
  width: 45%;
`;

const List = styled.ul``;

export default function Results(props) {
  return (
    <Container>
      Search results:
      <List />
    </Container>
  );
}
