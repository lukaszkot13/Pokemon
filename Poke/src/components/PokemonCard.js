import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import styled from "styled-components";
import axios from "axios";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Page = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  padding: 1.5rem 0;
  margin: 0.3rem;
  border: 5px solid #efefef;
  border-radius: 3.2rem;
  min-width: 304px;
  text-align: center;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.089);
  background-color: mintcream;
`;
const Image = styled.img`
  width: 100px;
  height: 100px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Skils = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Titles = styled.h1`
  text-transform: capitalize;
  color: blue;
`;
const Title = styled.h4`
  font-size: 15px;
  color: blueviolet;
`;
const Forms = styled.h3`
  font-style: oblique;
`;
const DataName = styled.h3`
  color: green;
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3%;
  height: 50px;
  width: 300px;
  border-radius: 1.1rem;
  color: red;
  background-color: aliceblue;
  &:hover {
    transform: scale(1.1);
  }
`;
const Id = styled.p`
  color: blue;
`;
const ButtonDel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1%;
  height: 50px;
  width: 300px;
  border-radius: 1.1rem;
  color: red;
  background-color: aliceblue;
  &:hover {
    transform: scale(1.1);
  }
`;
const IkonaFavorite = styled.div`
  color: ${({ isFavorite }) => (isFavorite ? "red" : "black")};
  &&:hover {
    transform: scale(2.5);
  }
`;
const IkonaArena = styled.div`
  color: ${({ fight }) => (fight ? "black" : "red")};
  &:hover {
    transform: rotate(180deg);
  }
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
        .catch(() => alert("Pokemon jest juz dodany do ulubionych !!"));
    }
  };
  useEffect(() => {
    axios.get(`${DB_URL}/arena`).then((response) => {
      setFight(response.data.length >= 2 ? false : true);
    });
  }, [DB_URL]);
  console.log("WALKA", fight);

  const AddArena = () => {
    if (fight === true) {
      axios
        .post(`${DB_URL}/arena`, {
          id: pokemonDetails.id,
        })
        .then(() => setFight(fight === false));
    }
  };

  const DeleteArena = () => {
    if (fight === false)
      axios
        .delete(`${DB_URL}/arena/${pokemonDetails.id}`)
        .then((response) => console.log(response.data));
    setFight(false);
  };

  if (!pokemonDetails) {
    return null;
  }

  return (
    <Page>
      <Container data-name={pokemonDetails.name}>
        <Image src={pokemonDetails?.sprites?.other.dream_world.front_default} />
        <Wrapper>
          <Titles>{pokemonDetails.name}</Titles>
          <Skils>
            <Forms>
              <DataName>{pokemonDetails?.height}</DataName>
              <Title>Height</Title>
            </Forms>
            <Forms>
              <DataName>{pokemonDetails?.base_experience}</DataName>
              <Title>Base Experience</Title>
            </Forms>
          </Skils>
          <IkonaFavorite isFavorite={isFavorite}>
            <FavoriteIcon onClick={() => AddFavorite()} />
          </IkonaFavorite>
          <br />
          <IkonaArena fight={fight}>
            <SportsKabaddiIcon onClick={() => AddArena()} />
          </IkonaArena>
          <Skils>
            <Forms>
              <DataName>{pokemonDetails?.abilities?.[0].ability.name}</DataName>
              <Title>Ability</Title>
            </Forms>
            <Forms>
              <DataName>{pokemonDetails?.weight}</DataName>
              <Title>Weight</Title>
            </Forms>
          </Skils>
          <DataName>Type: {pokemonDetails?.types?.[0].type.name}</DataName>
          <Id>#0{pokemonDetails?.id}</Id>
        </Wrapper>

        <ButtonDel fight={fight} onClick={DeleteArena}>
          Usuń z Areny
        </ButtonDel>
        <Button onClick={() => history.push(`/`)}>Strona Główna</Button>
      </Container>
    </Page>
  );
}

export default PokemonCard;
