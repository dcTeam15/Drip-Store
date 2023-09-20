import { ShoppingCart } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Header = () => {

    const navigator = useLocation();
    console.log(navigator);

    return(
        <>
            <HeaderContainer>
                <HeaderLogo>
                    <HeaderLogoIcon />
                    {'Digital Store'}
                </HeaderLogo>
                <HeaderBusca>
                    <input type="text" placeholder="Pesquisar produto..." />
                    <button></button>
                </HeaderBusca>
                <HeaderAcoes>
                    <Link className="btn-ghost" to={'/cadastro'}>{'Cadastre-se'}</Link>
                    <Link className="btn-filled" to={'/entrar'}>{'Entrar'}</Link>
                    <ShoppingCart />
                </HeaderAcoes>
                <HeaderMenu>
                    <ul>
                        <li>
                            <Link className={navigator.pathname === '/' ? 'active' : ''} to={'/'}>{'Início'}</Link>
                        </li>
                        <li>
                            <Link className={navigator.pathname === '/produtos' ? 'active' : ''} to={'/produtos'}>{'Produtos'}</Link>
                        </li>
                        <li>
                            <Link className={navigator.pathname === '/categorias' ? 'active' : ''} to={'/categorias'}>{'Categorias'}</Link>
                        </li>
                        <li>
                            <Link className={navigator.pathname === '/meus-pedidos' ? 'active' : ''} to={'/meus-pedidos'}>{'Meus Pedidos'}</Link>
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
    position: relative;
    &::after{
        content: "";
        width: 8px;
        height: 8px;
        border-top: 4px solid #ffffff;
        border-right: 4px solid #ffffff;
        position: absolute;
        top: 50%;
        left: 3px;
        transform: translateY(-50%) rotate(45deg);
    }
    &::before{
        content: "";
        width: 8px;
        height: 3px;
        background-color: #ffffff;
        position: absolute;
        bottom: 7px;
        right: 6px;
    }
`;
const HeaderBusca = styled.div`
    flex: 1;
    background-color: #47474720;
    border-radius: 5px;
    position: relative;
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
    & button{
        width: 60px;
        height: 60px;
        position: absolute;
        top: 0;
        right: 10px;
        transform: rotate(-45deg);
        background-color: transparent;
        cursor: pointer;
        &::after{
            content: "";
            width: 18px;
            height: 18px;
            border: 3px solid #cccccc;
            position: absolute;
            top: calc(50% - 9px);
            left: calc(50% - 9px);
            border-radius: 100%;
            transition-duration: 200ms;
        }
        &::before{
            content:"";
            width: 3px;
            height: 8px;
            background-color: #cccccc;
            position: absolute;
            top: calc(50% + 12px);
            left: calc(50% + 1px);
            transition-duration: 200ms;
        }
        &:hover::after{
            border-color: var(--pink);
        }
        &:hover::before{
            background-color: var(--pink);
        }
    }
`;
const HeaderAcoes = styled.div`
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 30px;
    & .btn-ghost{
        line-height: 40px;
        color: #474747;
        text-decoration: underline;
        display: block;
    }
    & .btn-filled{
        line-height: 40px;
        background-color: var(--pink);
        padding: 0 26px;
        border-radius: 5px;
        color: #ffffff;
        display: block;
        font-weight: bold;
    }
    & svg{
        fill: var(--pink);
    }
`;
const HeaderMenu = styled.nav`
    width: 100%;
    & ul{
        display: flex;
        gap: 32px;
    }
    & a{
        color: #474747;
        line-height: 30px;
        display: block;
    }
    & a.active{
        font-weight: bold;
        color: var(--pink);
        border-bottom: 3px solid var(--pink);
    }
`;

export default Header;