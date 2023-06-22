import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { List } from "@phosphor-icons/react";

export const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Container>
      <MenuButton onClick={toggleMenu}>
        <List size={24} />
      </MenuButton>
      <MenuList show={showMenu}>
        <StyledLink to={"/"}>Home</StyledLink>
        <StyledLink to={"/"}>Produtos</StyledLink>
        <StyledLink to={"/"}>Categorias</StyledLink>
        <StyledLink to={"/"}>Meus Pedidos</StyledLink>
      </MenuList>
    </Container>
  );
};

const Container = styled.nav`
  position: relative;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 480px) {
    display: block;
  }
`;

const MenuList = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    display: ${({ show }) => (show ? "flex" : "none")};
    position: absolute;
    top: 40px;
    left: 0;
    width: 120px;
    background-color: #f9f9f9;
  }
`;

const StyledLink = styled(Link)`
  color: #474747;
  font-size: 17px;
  position: relative;
  padding-bottom: 2px;
  display: inline-block;
  transition: all 200ms ease;
  text-decoration: none;

  &::after {
    transition: all 200ms ease;
    position: absolute;
    content: " ";
    border-radius: 2px;
    z-index: 1;
    background-color: #c92071;
    width: 0;
    height: 2.5px;
    bottom: 0;
    left: 50%;
  }
  &:hover::after {
    left: 0;
    width: 100%;
    color: #c92071;
    font-weight: bolder;
  }

  &:hover::after:active {
    color: #c92071;
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    margin-bottom: 10px;

    &::after {
      display: none;
    }
    &:hover, :active {
      filter: brightness(0.1);
    }
  }
`;
