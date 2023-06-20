import { useState } from "react";
import styled from "styled-components";

export function Button({ stateBtn, onClick, type, children, classe }) {
  const [clicked, setClicked] = useState(stateBtn);

  function handleClick() {
    setClicked(!clicked);
    if (onClick) {
      onClick(!clicked);
    }
  }
  return (
    <Container className={classe} onClick={handleClick} type={type}>
      {children}
    </Container>
  );
}

const Container = styled.button`
  margin: 10px;
  width: 110px;
  height: 43px;
  line-height: 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition-duration: 200ms;
  &.outlined {
    background-color: #f8f8f8;
    text-decoration: underline;
    color: #474747;
  }
  &.primary {
    background-color: #c92071;
    color: #fff;
  }
`;