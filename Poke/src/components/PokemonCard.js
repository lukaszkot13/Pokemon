import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import styled from "styled-components";
import axios from "axios";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";

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
  color: ${({ isFavorite }) => (isFavorite ? "red" : "black")};
`;
function PokemonCard({ url, DB_URL }) {
  const history = useHistory();
  const [pokemonDetails, setPokemonDetails] = useState();
  const [isFavorite, setIsFavorite] = useState(null);
  const [fight, setFight] = useState(null);
  const [favouritePokemons, setFavouritePokemons] = useState(null);

  useEffect(() => {
    axios.get(`${url}`).then((response) => {
      setPokemonDetails(response.data);
    });
  }, []);
  console.log("PokemonCard", pokemonDetails);

  useEffect(() => {
    axios.get(`${DB_URL}/ulubione`).then((response) => {
      setFavouritePokemons(response.data);
    });
  }, [DB_URL]);
  console.log("ISFAVORITE", favouritePokemons);

  useEffect(() => {
    const isFavourites = favouritePokemons
      ?.map((item) => item.id)
      .includes(pokemonDetails.id);
    setIsFavorite(isFavourites);
  }, [favouritePokemons]);

  const AddFavorite = () => {
    if (isFavorite === true) {
      axios
        .delete(`${DB_URL}/ulubione/${pokemonDetails.id}`)
        .then(() => setIsFavorite(isFavorite === false));
    } else {
      axios
        .post(`${DB_URL}/ulubione/`, {
          id: pokemonDetails.id,
        })
        .then(() => setIsFavorite(true))
        .catch(() => alert("Błąd"));
    }
  };
  useEffect(() => {
    axios.get(`${DB_URL}/arena`).then((response) => {
      setFight(response.data.length >= 2 ? false : true);
    });
  }, [DB_URL]);
  console.log("WALKA", fight);

  const AddArena = () => {
    if (fight) {
      axios
        .post(`${DB_URL}/arena`, {
          id: pokemonDetails.id,
        })
        .then(() => setFight(fight));
    }
  };

  if (!pokemonDetails) {
    return null;
  }

  return (
    <div>
      <Container data-name={pokemonDetails.name}>
        <Image src={pokemonDetails?.sprites?.other.dream_world.front_default} />

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
            <Ikona isFavorite={isFavorite}>
              <FavoriteBorderOutlinedIcon onClick={() => AddFavorite()} />
            </Ikona>
            <br />
            <SportsKabaddiIcon onClick={() => AddArena()} />
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
          <small>#0{pokemonDetails?.id}</small>
        </Wrapper>
      </Container>
      <Button onClick={() => history.push(`/`)}>Strona Główna</Button>
    </div>
  );
}

export default PokemonCard;
