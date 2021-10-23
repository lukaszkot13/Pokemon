import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

import PokemonThumb from "../components/PokemonThumb";

const Input = styled.input`
  box-sizing: border-box;
  font-size: 1rem;
  padding: 1rem;
  display: block;
  margin: 2rem auto;
`;
const PageContainer = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 3rem 0.5rem;
`;
const PokemonContainer = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const AllContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 5px;
  color: #444;
  padding: 0.5rem 1.5rem;
  min-width: 50%;
  margin-top: 1rem;
`;

function PokemonList({ setPokemon2, BASE_URL }) {
  const [pokemon, setPokemon] = useState();
  const [limitValue, setLimitValue] = useState(15);
  const [pageValue, setPageValue] = useState(0);

  const [searchPokemon, setSearchPokemon] = useState("");

  useEffect(() => {
    axios
      .get(`${BASE_URL}?limit=${limitValue}&offset=${pageValue}`)
      .then((response) => {
        console.log("dane", response.data);
        setPokemon(response.data);
        setPokemon2(response.data);
      });
  }, [pageValue]);

  console.log("pokemon", pokemon);

  const prevPage = () => {
    if (pageValue === 0) {
      alert("Jesteś na pierwszej stronie ");
      return;
    }
    setPageValue(pageValue - 15);
    setLimitValue(15);
  };

  const nextPage = () => {
    if (pageValue === 150) {
      alert("Jesteś na ostatnoej stronie");
      return;
    } else if (pageValue === 135) {
      setLimitValue(1);
    }
    setPageValue(pageValue + 15);
  };
  return (
    <>
      <Input
        type="text"
        placeholder="Wyszukaj Pokemona"
        onChange={(e) => {
          setSearchPokemon(e.target.value);
        }}
      />
      {/* {pokemon.filter((pokemon) => {
        if (searchPokemon === "") {
          return pokemon;
        } else if (
          pokemon.name.toLowerCase().includes(searchPokemon.toLowerCase())
        ) {
          return setSearchPokemon;
        }
      })} */}
      <PageContainer>
        <PokemonContainer>
          <AllContainer>
            {pokemon?.results
              ?.filter((_, index) => index < 15)
              .map(({ url }, index) => (
                <PokemonThumb url={url} key={index} />
              ))}
          </AllContainer>

          <Button onClick={prevPage}>Poprzednia strona</Button>
          <Button onClick={nextPage}>Następna strona</Button>
        </PokemonContainer>
      </PageContainer>
    </>
  );
}
export default PokemonList;
