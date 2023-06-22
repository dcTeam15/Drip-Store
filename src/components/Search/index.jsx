import { useState } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import styled from "styled-components";

export const Search = (classe) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica de busca aqui
    console.log("Realizando busca por:", searchTerm);
  };

  return (
    <Container onSubmit={handleSubmit}>
      <Input
        type="search"
        placeholder="Pesquisar produto..."
        className={classe}
        maxLength={100}
        onChange={handleSearch}
      />
      <SearchIcon type="submit">
        <MagnifyingGlass size={20} />
      </SearchIcon>
    </Container>
  );
};

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 25px;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: #474747;
  background-color: #dfdbdb;
  border-radius: 8px;
  outline: none;
  border: none;
  transition-duration: 200ms;
  &:focus {
    border: 1.5px solid #c92071;
  }
  /* Estilos responsivos */
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const SearchIcon = styled.button`
  position: absolute;
  width: 3rem;
  height: 3rem;
  border: none;
  outline: none;
  top: 10px;
  right: 10px;
  background-color: transparent;
  cursor: pointer;
  z-index: 1;

  border-radius: 8px;
  transition-duration: 200ms;
  background-color: #dfdbdb;
  &::-webkit-search-cancel-button,
  &::-webkit-search-decoration {
    display: none;
  }
  &:hover {
    background-color: #c9207130;
    color: #c92071;
    border-color: #c92071;
  }
  /* Estilos responsivos */
  @media screen and (max-width: 480px) {
    position: initial;
  }
`;

const Container = styled.form`
  position: relative;
  height: 64px;
  width: 100%;
`;
