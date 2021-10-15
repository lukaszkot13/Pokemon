import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Image = styled.img`
  width: 400px;
  height: 400px;
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
  background-color: mintcream, "&:hover" transform "scale(1.1)";
`;
const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    "flex-direction": "column",
    width: "100%",
  },
  umiejetnosci: {
    display: "flex",
    justifyContent: " space-around",
  },
  height: {
    display: "flex",
    flexDirection: "column",
  },
  container: {
    display: "flex",
    "flex-direction": "column",
    "align-items": "center",
    "justify-content": "center",
    padding: "1.5rem 0",
    margin: "0.3rem",
    border: "1px solid #efefef",
    "border-radius": "1.2rem",
    "min-width": "304px",
    "text-align": "center",
    "box-shadow": " 0 3px 15px rgba(0, 0, 0, 0.089)",
    "background-color": "mintcream",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
});

const PokemonThumb = ({ url, name }) => {
  const classes = useStyles();
  const [pokemon, setPokemon] = useState([]);
  const history = useHistory();

  const handleClick = () => {
    history.push(`/${pokemon.name}`);
  };

  useEffect(() => {
    axios.get(`${url}`).then((response) => {
      setPokemon(response.data);
      // setPoke((currentlist) => [...currentlist, response.data]);
    });
  }, [url]);
  console.log("pokemonki", pokemon);

  if (!pokemon) {
    return null;
  }
  return (
    <Container onClick={handleClick} data-name={pokemon.name}>
      <div className="number">
        <small>#0{pokemon.id}</small>
      </div>
      <Image
        src={pokemon?.sprites?.other.dream_world.front_default}
        alt={pokemon?.name}
      />
      <Wrapper>
        <h3>{pokemon.name}</h3>
        <div className={classes.umiejetnosci}>
          <div className={classes.ustawienie}>
            <h5>{pokemon.height}</h5>
            <h4>Height</h4>
          </div>
          <div className={classes.ustawienie}>
            <h5>{pokemon.base_experience}</h5>
            <h4>Base Experience</h4>
          </div>
        </div>
        <div className={classes.umiejetnosci}>
          <div className={classes.ustawienie}>
            <h5>{pokemon?.abilities?.[0].ability.name}</h5>
            <h4>Ability</h4>
          </div>
          <div className={classes.ustawienie}>
            <h5>{pokemon.weight}</h5>
            <h4>Weight</h4>
          </div>
        </div>
        <small>Type: {pokemon?.types?.[0].type.name}</small>
      </Wrapper>
    </Container>
  );
};

export default PokemonThumb;
