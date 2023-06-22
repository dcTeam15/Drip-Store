import styled from "styled-components";
import { Search } from "../Search";
import { Title } from "../Title";
import { Logo } from "../Logo";
import { Button } from "../Button";
import { Cart } from "../Cart";
import { Menu } from "../Menu";

const Header = () => {
  return (
    <>
      <Container>
        <Left>
          <Logo />
          <Title texto={"digital store"} cor="#c92071" />
        </Left>
        <Search focus />
        <Right>
          <Button classe="outlined">Cadastre-se</Button>
          <Button classe="primary">Entrar</Button>
        </Right>
        <Cart />
      </Container>
      <Menu />
    </>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 190px;
`;

const Left = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

const Right = styled.div`
  display: flex;
  height: 40px;
  gap: 10px;
`;