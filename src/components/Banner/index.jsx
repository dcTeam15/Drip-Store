import React from 'react';
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
            description: "Melhores ofertas personalizadas",
            name: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur."
        },
        {
            image:Image2,
            description: "Melhores ofertas personalizadas",
            name: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur."
        },
        {
            image:Image3,
            description: "Melhores ofertas personalizadas",
            name: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur."
        }
    ];

    function next(){
        
    }

    return(
        <>
            <Caroussel>
                <CarousselItems>
                    <CarousselItem>
                        <CarousselContent>
                            <h6>Melhores ofertas personalizadas</h6>
                            <h2>Queima de<br/>estoque Nike</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis amet minus aspernatur debitis quod voluptas iste asperiores.
                            </p>
                            <Link to={'/'}>Ver Ofertas</Link>
                        </CarousselContent>
                        <CarousselImage src={Image1} />
                    </CarousselItem>
                    <CarousselItem>
                        <CarousselContent>
                            <h6>Melhores ofertas personalizadas</h6>
                            <h2>Queima de<br/>estoque Nike</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis amet minus aspernatur debitis quod voluptas iste asperiores.
                            </p>
                            <Link to={'/'}>Ver Ofertas</Link>
                        </CarousselContent>
                        <CarousselImage src={Image2} />
                    </CarousselItem>
                    <CarousselItem>
                        <CarousselContent>
                            <h6>Melhores ofertas personalizadas</h6>
                            <h2>Queima de<br/>estoque Nike</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis amet minus aspernatur debitis quod voluptas iste asperiores.
                            </p>
                            <Link to={'/'}>Ver Ofertas</Link>
                        </CarousselContent>
                        <CarousselImage src={Image3} />
                    </CarousselItem>
                </CarousselItems>
                <CarousselOptions>
                    <CarousselOption className='active' />
                    <CarousselOption />
                    <CarousselOption />
                </CarousselOptions>
            </Caroussel>
        </>
    );
}

const Caroussel = styled.div`
    position: relative;
    overflow: hidden;
`;

const CarousselItems = styled.div`
    width: calc(100% * 3);
    display: flex;
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