import React, { useState } from 'react';
import Image1 from '../img/Tenis1.png';
import Image2 from '../img/Tenis2.png';
import Image3 from '../img/Tenis8.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import './style.css'
// import Carousel from 'react-material-ui-carousel'
// import { Paper, Button } from '@mui/material'

const Banner = () => {
    let items = [
        {
            image: Image1,
            suptitle: "Melhores ofertas personalizadas",
            description: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur."
        },
        {
            image:Image2,
            suptitle: "Melhores ofertas personalizadas",
            description: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur."
        },
        {
            image:Image3,
            suptitle: "Melhores ofertas personalizadas",
            description: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur."
        }
    ];

    const [carousselAtivo, setCarousselAtivo] = useState(0);

    return(
        <>
            <Caroussel>
                <CarousselItems position={carousselAtivo} qtd={items.length}>
                    {
                        items.map((item, index) => (
                            <CarousselItem className={ carousselAtivo == index ? 'active' : '' }>
                                <CarousselContent>
                                    <h6>{item.suptitle}</h6>
                                    <h2>Queima de<br/>estoque Nike</h2>
                                    <p>
                                        {item.description}
                                    </p>
                                    <Link to={'/'}>Ver Ofertas</Link>
                                </CarousselContent>
                                <CarousselImage src={item.image} />
                            </CarousselItem>
                        ))
                    }
                </CarousselItems>
                <CarousselOptions>
                    <CarousselOption
                        className={ carousselAtivo == 0 ? 'active' : '' }
                        onClick={() => setCarousselAtivo(0)}
                    />
                    <CarousselOption
                        className={ carousselAtivo == 1 ? 'active' : '' }
                        onClick={() => setCarousselAtivo(1)}
                    />
                    <CarousselOption
                        className={ carousselAtivo == 2 ? 'active' : '' }
                        onClick={() => setCarousselAtivo(2)}
                    />
                </CarousselOptions>
            </Caroussel>
        </>
    );
}

const Caroussel = styled.div`
    position: relative;
    overflow: hidden;
    background-color: #47474720;
`;

const CarousselItems = styled.div`
    width: calc(100% * ${props => props.qtd});
    display: flex;
    position: relative;
    left: calc(-100vw * ${props => props.position});
    transition-duration: 300ms;
`;

const CarousselItem = styled.div`
    display: flex;
    align-items: stretch;
    padding: 0 100px;
    width: 100vw;
    height: calc(100vh - 120px);
`;

const CarousselContent = styled.div`
    width: 540px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & h6{
        font-size: 16px;
        line-height: 24px;
        font-weight: bold;
        letter-spacing: .75px;
        margin-bottom: 20px;
        color: #F6AA1C;
    }

    & h2{
        font-size: 64px;
        line-height: 66px;
        letter-spacing: 1px;
        color: #1F1F1F;
        margin-bottom: 20px;
    }

    & p{
        font-size: 18px;
        line-height: 34px;
        letter-spacing: .75px;
        color: #474747;
    }

    & a{
        width: 220px;
        background-color: var(--pink);
        border-radius: 5px;
        line-height: 48px;
        display: block;
        color: #ffffff;
        font-weight: bold;
        text-align: center;
        font-size: 16px;
        letter-spacing: .75px;
        margin-top: 40px;
    }

`;

const CarousselImage = styled.img`
    flex: 1;
    transform: rotate(-10deg);
`;

const CarousselOptions = styled.div`
    display: flex;
    gap: 16px;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
`;

const CarousselOption = styled.div`
    width: 16px;
    height: 16px;
    background-color: #47474740;
    border-radius: 20px;
    cursor: pointer;
    
    &.active{
        background-color: var(--pink);
    }
`;


export default Banner;