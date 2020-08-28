import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
`;

export default function Button(props) {
  const click = (event) => {
    props.callback(event.target.value);
  };
  return (
    <StyledButton onClick={click} value={props.value} action={props.name}>
      {props.name}
    </StyledButton>
  );
}
