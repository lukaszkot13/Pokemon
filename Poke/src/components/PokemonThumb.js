import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Image = styled.img`
  width: 350px;
  height: 350px;
  &:hover {
    transform: rotate(10deg);
  }
`;
const Forms = styled.h3`
  font-style: oblique;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0;
  margin: 0.3rem;
  border: 1px solid #efefef;
  border-radius: 1.2rem;
  min-width: 304px;
  text-align: center;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.089);
  background-color: mintcream;
  &:hover {
    transform: scale(1.1);
  }
`;
const Titles = styled.h1`
  text-transform: capitalize;
  color: yellow;
`;
const DataName = styled.h3`
  color: green;
`;
const Umiejetnosci = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Title = styled.h4`
  font-size: 15px;
  color: blueviolet;
`;

const PokemonThumb = ({ url }) => {
  const [pokemon, setPokemon] = useState([]);
  const history = useHistory();

  const handleClick = () => {
    history.push(`/${pokemon.name}`);
  };

  useEffect(() => {
    axios.get(`${url}`).then((response) => {
      setPokemon(response.data);
    });
  }, [url]);
  console.log("pokemonki", pokemon);

  if (!pokemon) {
    return null;
  }
  return (
    <Container onClick={handleClick} data-name={pokemon.name}>
      <small>#0{pokemon.id}</small>
      <Image
        src={pokemon?.sprites?.other.dream_world.front_default}
        alt={pokemon?.name}
      />
      <Wrapper>
        <Titles>{pokemon.name}</Titles>
        <Umiejetnosci>
          <Forms>
            <DataName>{pokemon.height}</DataName>
            <Title>Height</Title>
          </Forms>
          <Forms>
            <DataName>{pokemon.base_experience}</DataName>
            <Title>Base Experience</Title>
          </Forms>
        </Umiejetnosci>
        <Umiejetnosci>
          <Forms>
            <DataName>{pokemon?.abilities?.[0].ability.name}</DataName>
            <Title>Ability</Title>
          </Forms>
          <Forms>
            <DataName>{pokemon.weight}</DataName>
            <Title>Weight</Title>
          </Forms>
        </Umiejetnosci>
        <small>Type: {pokemon?.types?.[0].type.name}</small>
      </Wrapper>
    </Container>
  );
};

export default PokemonThumb;
