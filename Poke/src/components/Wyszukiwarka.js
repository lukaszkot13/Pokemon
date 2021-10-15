import * as React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

const Container = styled.input`
  box-sizing: border-box;
  font-size: 1rem;
  padding: 1rem;
  display: block;
  margin: 2rem auto;
`;

function Wyszukiwarka() {
  const [searchPokemon, setSearchPokemon] = useState("");

  useEffect(() => {
    const 
  });

  return (
    <>
      <Container
        type="text"
        placeholder="Wyszukaj Pokemona"
        onChange={(e) => {
          setSearchPokemon(e.target.value);
        }}
      />
    </>
  );
}
export default Wyszukiwarka({setSearchPokemon});
