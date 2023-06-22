import { ShoppingCart } from "@phosphor-icons/react";
import styled from "styled-components";

const Container = styled.span`
  position: relative;
  color: #c92071;
  width: 20px;
  height: 15px;
  cursor: pointer;
  &::after {
    position: absolute;
    content: "";
    width: 15px;
    height: 15px;
    z-index: 1;
    background-color: #c92071;
    border-radius: 50%;
    top: -6px;
    left: 12px;
  }
`;

export const Cart = () => {
  return (
    <Container>
      <ShoppingCart size={20} />
    </Container>
  );
};
