import logo from "../../assets/logo.png";
import styled from "styled-components";

const Imagem = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export const Logo = () => {
  return <Imagem src={logo} alt="Logo digital store" />;
};
