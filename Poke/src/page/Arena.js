import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import ArenaCard from "../components/ArenaCard";

const S = {
  Arena: styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
    size: 50px;
  `,
  Napis: styled.h1`
    color: red;
  `,
  Wynik: styled.div`
    display: flex;
    justify-content: center;
  `,
  Przycisk: styled.button`
    display: flex;
    width: 300px;
    height: 150px;
    border-radius: 10%;
    align-items: center;
    justify-content: center;
    &:hover {
      transform: scale(1.9);
    }
  `,
  Page: styled.div`
    display: flex;
    flex-direction: column;
    background-size: cover;
    background-image: url("https://images.unsplash.com/photo-1542779283-429940ce8336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
    width: auto;
    height: auto;
  `,
  Place: styled.div`
    margin-top: 10%;

    height: 100px;
    background-color: black;
  `,
  First: styled.div``,
  Second: styled.div``,
  Forms: styled.h3`
    font-style: oblique;
  `,
  Title: styled.h1`
    display: flex;
    justify-content: center;
    font-size: 30px;
    color: blueviolet;
  `,
  Fight: styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 5%;
  `,
  Title: styled.h1`
    display: flex;
    justify-content: center;
    margin-top: 2%;
    color: yellow;
  `,
  Wroc: styled.div`
    display: flex;
    justify-content: center;
  `,
  Powrot: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1%;
    width: 100px;
    height: 50px;
    border-radius: 10%;
    &:hover {
      transform: scale(1.9);
    }
  `,
  NapisWygrana: styled.div`
    display: flex;
    justify-content: center;
  `,
};

function Arena() {
  const DB_URL = `http://localhost:3000`;
  const [winner, setWinner] = useState();
  const [pokemonArena, setPokemonArena] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios.get(`${DB_URL}`);
  });

  useEffect(() => {
    axios.get(`${DB_URL}/arena/`).then((res) => setPokemonArena(res.data));
  }, []);
  console.log("Walka", pokemonArena);

  const Home = () => {
    history.push(`/`);
  };

  const walka = () => {
    if (pokemonArena.length === 2) {
      if (
        pokemonArena[0].base_experience * pokemonArena[0].weight >
        pokemonArena[1].base_experience * pokemonArena[1].weight
      ) {
        return setWinner(
          <ArenaCard
            image={pokemonArena[0]?.image}
            name={pokemonArena[0]?.name}
            height={pokemonArena[0]?.height}
            base_experience={pokemonArena[0]?.base_experience}
            weight={pokemonArena[0]?.weight}
            ability={pokemonArena[0]?.ability}
            id={pokemonArena[0]?.id}
          />
        );
      } else {
        setWinner(
          <ArenaCard
            image={pokemonArena[1]?.image}
            name={pokemonArena[1]?.name}
            height={pokemonArena[1]?.height}
            base_experience={pokemonArena[1]?.base_experience}
            weight={pokemonArena[1]?.weight}
            ability={pokemonArena[1]?.ability}
            id={pokemonArena[1]?.id}
          />
        );
      }
    }
  };

  // const DeleteArena = () => {
  //   axios
  //     .delete(`${DB_URL}/arena/${pokemonArena}`)
  //     .then((response) => console.log(response.data));
  // };

  if (!pokemonArena) return null;

  return (
    <S.Page>
      <S.Wroc>
        <S.Powrot onClick={Home}>Strona Główna</S.Powrot>
      </S.Wroc>
      <S.Title>Arena Pokemonów</S.Title>
      <S.Fight>
        <S.First>
          {/* <button onClick={DeleteArena}></button> */}
          <ArenaCard
            image={pokemonArena[0]?.image}
            name={pokemonArena[0]?.name}
            height={pokemonArena[0]?.height}
            base_experience={pokemonArena[0]?.base_experience}
            weight={pokemonArena[0]?.weight}
            ability={pokemonArena[0]?.ability}
            id={pokemonArena[0]?.id}
          />
        </S.First>
        <S.Przycisk onClick={walka}>WALKA</S.Przycisk>
        <S.Second>
          <ArenaCard
            image={pokemonArena[1]?.image}
            name={pokemonArena[1]?.name}
            height={pokemonArena[1]?.height}
            base_experience={pokemonArena[1]?.base_experience}
            weight={pokemonArena[1]?.weight}
            ability={pokemonArena[1]?.ability}
            id={pokemonArena[1]?.id}
          />
        </S.Second>
      </S.Fight>
      <S.Wynik>
        <S.Arena>
          <S.NapisWygrana>
            <S.Napis>Wygrał :</S.Napis>
          </S.NapisWygrana>
          {winner}
        </S.Arena>
      </S.Wynik>
    </S.Page>
  );
}

export default Arena;
