import styled from "styled-components";

const Titulo = styled.h1`
  text-transform: capitalize;
  font-size: 34px;
  /* Estilos responsivos */
  @media screen and (max-width: 600px) {
    font-size: 20px;
    font-weight: 600;
  }
`;

// eslint-disable-next-line react/prop-types
export const Title = ({ texto, cor }) => {
  return <Titulo style={{ color: cor }}>{texto}</Titulo>;
};
