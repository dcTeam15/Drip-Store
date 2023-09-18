import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
    return(
        <>
            <HeaderContainer>
                <HeaderLogo>
                    <HeaderLogoIcon />
                    {'Digital Store'}
                </HeaderLogo>
                <HeaderBusca>
                    <input type="text" placeholder="Pesquisar produto..." />
                </HeaderBusca>
                <HeaderAcoes>
                    <Link to={'/cadastro'}>{'Cadastre-se'}</Link>
                    <Link to={'/entrar'}>{'Entrar'}</Link>
                </HeaderAcoes>
                <HeaderMenu>
                    <ul>
                        <li>
                            <Link to={'/'}>{'Início'}</Link>
                        </li>
                        <li>
                            <Link to={'/produtos'}>{'Produtos'}</Link>
                        </li>
                        <li>
                            <Link to={'/categorias'}>{'Categorias'}</Link>
                        </li>
                        <li>
                            <Link to={'/meus-pedidos'}>{'Meus Pedidos'}</Link>
                        </li>
                    </ul>
                </HeaderMenu>
            </HeaderContainer> 
        </>
    );
}

const HeaderContainer = styled.header`
    padding: 34px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
`;
const HeaderLogo = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 36px;
    font-weight: bold;
    color: var(--pink);
`;
const HeaderLogoIcon = styled.div`
    width: 33px;
    height: 33px;
    border-radius: 5px;
    background-color: var(--pink);
`;
const HeaderBusca = styled.div`
    flex: 1;
    background-color: #47474720;
    border-radius: 5px;
    & input{
        width: 100%;
        height: 60px;
        background-color: transparent;
        padding-left: 16px;
        border: 3px solid transparent;
        border-radius: 5px;
        transition: all ease 200ms;
        &:focus{
            border-color: var(--pink);
        }
    }
`;
const HeaderAcoes = styled.div`

`;
const HeaderMenu = styled.nav`
    width: 100%;
    & ul{
        display: flex;
        gap: 32px;
    }
`;

export default Header;