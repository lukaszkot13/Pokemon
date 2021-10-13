import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import styled from "styled-components";
import axios from "axios";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Skils = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Image = styled.p`
  width: 120px;
  height: 120px;
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
`;

const useStyles = makeStyles({
  image: {
    width: "120px",
    height: " 120px",
  },
  button: {
    "align-items": "center",
    "justify-content": "center",
    height: "50px",
    width: "950px",
    "border-radius": "1.1rem",
    color: "red",
  },
});

function PokemonCard({ url }) {
  const classes = useStyles();
  const history = useHistory();
  const [pokemonDetails, setPokemonDetails] = useState();

  useEffect(() => {
    axios.get(`${url}`).then((response) => {
      setPokemonDetails(response.data);
    });
  }, []);
  console.log("PokemonCard", pokemonDetails);

  return (
    <div>
      <Container data-name={pokemonDetails?.name}>
        <div>
          <small>#0{pokemonDetails?.id}</small>
        </div>
        <img
          className={classes.image}
          src={pokemonDetails?.sprites?.other.dream_world.front_default}
        />
        <Wrapper>
          <h3>{pokemonDetails?.name}</h3>
          <Skils>
            <div>
              <h5>{pokemonDetails?.height}</h5>
              <h4>Height</h4>
            </div>
            <div>
              <h5>{pokemonDetails?.base_experience}</h5>
              <h4>Base Experience</h4>
            </div>
          </Skils>
          <div>
            <FavoriteBorderOutlinedIcon />
          </div>
          <Skils>
            <div>
              <h5>{pokemonDetails?.abilities?.[0].ability.name}</h5>
              <h4>Ability</h4>
            </div>
            <div>
              <h5>{pokemonDetails?.weight}</h5>
              <h4>Weight</h4>
            </div>
          </Skils>
          <small>Type: {pokemonDetails?.types?.[0].type.name}</small>
        </Wrapper>
      </Container>
      <button className={classes.button} onClick={() => history.push(`/`)}>
        Strona Główna
      </button>
    </div>
  );
}

export default PokemonCard;
