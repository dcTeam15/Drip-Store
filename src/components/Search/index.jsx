import { useState } from 'react';
import { MagnifyingGlass } from "@phosphor-icons/react";
import styled from "styled-components";

const Input = styled.input`
  width: 600px;
  height: 64px;
  padding-left: 25px;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: #474747;
  background-color: #f8f8f8;
  border-radius: 8px;
  outline: none;
  border: none;
  transition-duration: 200ms;
  &:focus {
    border: 1.5px solid #c92071;
  }
`;

const SearchIcon = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  right: 5px;
  top: 8px;
  z-index: 1;
  border-radius: 8px;
  transition-duration: 200ms;
  background-color: #f8f8f8;
  &::-webkit-search-cancel-button,
  &::-webkit-search-decoration {
    display: none;
  }
  &:hover {
    background-color: #c9207110;
    color: #c92071;
  }
`;

const Container = styled.form`
  position: relative;
`;

export const Search = (classe) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica de busca aqui
    console.log('Realizando busca por:', searchTerm);
  };

  return (
    <Container onSubmit={handleSubmit}>
      <Input
        type="search"
        placeholder="Pesquisar produto..."
        className={classe}
        maxLength={50}
        onChange={handleSearch}
      />
      <SearchIcon type="submit">
        <MagnifyingGlass size={20} />
      </SearchIcon>
    </Container>
  );
};
