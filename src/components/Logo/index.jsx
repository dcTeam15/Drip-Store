import logo from "../../assets/logo.png";
import styled from "styled-components";

const Imagem = styled.img`
    width: 33px;
    height: 33px;
`;

export const Logo = () => {
    return(
        <Imagem src={logo} alt="Logo digital store" />
    )
}