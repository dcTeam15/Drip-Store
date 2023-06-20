import styled from "styled-components";
import { Search } from "../Search";
import { Title } from "../Title";
import { Logo } from "../Logo";
import { Button } from "../Button";
import { Cart } from "../Cart";

const Header = () => {
  return (
    <Container>
      <Aside>
        <Logo />
        <Title texto={"digital store"} />
      </Aside>
      <Search focus />
      <Aside>
        <Button classe="outlined">Cadastre-se</Button>
        <Button classe="primary">Entrar</Button>
        <Cart />
      </Aside>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  padding: 30px 50px;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

const Aside = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;