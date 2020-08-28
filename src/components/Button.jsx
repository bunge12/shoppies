import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: 1px solid transparent;
  border-radius: 0.25rem;
  margin-left: 0.5rem;
`;

export default function Button(props) {
  const click = (event) => {
    props.callback(event.target.value);
    event.target.setAttribute("disabled", "disabled");
  };
  return (
    <StyledButton onClick={click} value={props.value} action={props.name}>
      {props.name}
    </StyledButton>
  );
}
