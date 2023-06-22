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
        <Center>
          <Search focus />
        </Center>
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
  justify-content: space-between;
  width: 100%;
  height: 190px;
  /* Estilos responsivos */
  @media screen and (max-width: 480px) {
    height: 150px;
  }
`;

const Left = styled.div`
  width: 20%;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  /* Estilos responsivos */
  @media screen and (max-width: 480px) {
    gap: 5px;
    width: 50%;
  }
`;

const Right = styled.div`
  width: 20%;
  margin-left: 20px;
  display: flex;
  height: 40px;
  gap: 10px;
  /* Estilos responsivos */
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const Center = styled.div`
  width: 40%;
  /* Estilos responsivos */
  @media screen and (max-width: 480px) {
    width: 15%;
  }
`;
