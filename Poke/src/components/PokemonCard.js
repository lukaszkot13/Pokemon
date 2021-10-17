import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

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
const Image = styled.img`
  width: 400px;
  height: 400px;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
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
const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: auto;
  border-radius: 1.1rem;
  color: red;
  background-color: aliceblue;
`;
const Ikona = styled.div`
  color: ${({ isFavourite }) => (isFavourite ? "red" : "black")};
`;
function PokemonCard({ url }) {
  const history = useHistory();
  const [pokemonDetails, setPokemonDetails] = useState();
  const DB_URL = `http://localhost:3000`;
  const [isFavorite, setIsFavorite] = useState();
  const [heart, setHeart] = useState();

  useEffect(() => {
    axios.get(`${url}`).then((response) => {
      setPokemonDetails(response.data);
    });
  }, []);
  console.log("PokemonCard", pokemonDetails);

  useEffect(() => {});

  const AddFavorite = () => {
    if (isFavorite) {
      axios
        .delete(`${DB_URL}/ulubione/${pokemonDetails.id}`)
        .then(() => setIsFavorite(!isFavorite));
    } else {
      axios
        .post(`${DB_URL}/ulubione/`, {
          name: pokemonDetails.name,
          id: pokemonDetails.id,
        })
        .then(() => setIsFavorite(!isFavorite))
        .catch(() => alert("Błąd"));
    }
  };

  if (!pokemonDetails) {
    return null;
  }

  return (
    <div>
      <Container data-name={pokemonDetails.name}>
        <Image src={pokemonDetails.sprites.other.dream_world.front_default} />

        <Wrapper>
          <h3>{pokemonDetails.name}</h3>
          <Skils>
            <div>
              <h5>{pokemonDetails.height}</h5>
              <h4>Height</h4>
            </div>
            <div>
              <h5>{pokemonDetails.base_experience}</h5>
              <h4>Base Experience</h4>
            </div>
          </Skils>
          <div>
            <Ikona>
              <FavoriteBorderOutlinedIcon onClick={() => AddFavorite()} />
            </Ikona>
          </div>
          <Skils>
            <div>
              <h5>{pokemonDetails.abilities[0].ability.name}</h5>
              <h4>Ability</h4>
            </div>
            <div>
              <h5>{pokemonDetails?.weight}</h5>
              <h4>Weight</h4>
            </div>
          </Skils>
          <small>Type: {pokemonDetails.types[0].type.name}</small>
          <small>#0{pokemonDetails.id}</small>
        </Wrapper>
      </Container>
      <Button onClick={() => history.push(`/`)}>Strona Główna</Button>
    </div>
  );
}

export default PokemonCard;
