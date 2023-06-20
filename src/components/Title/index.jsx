import styled from "styled-components"

const Titulo = styled.h1`
    text-transform: capitalize;
`;

// eslint-disable-next-line react/prop-types
export const Title = ({texto}) => {
    return <Titulo>{texto}</Titulo>
}