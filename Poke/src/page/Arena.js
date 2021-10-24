import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

import PokemonCard from "../components/PokemonCard";

const S = {
  Arena: styled.div`
    && {
      display: flex;
      width: auto;
      height: auto;
      justify-content: space-around;
    }
  `,
  Przycisk: styled.button`
    display: flex;
    width: 300px;
    height: 150px;
    border-radius: 10%;
    align-items: center;
    justify-content: center;
  `,
  Page: styled.div`
    display: flex;
    flex-direction: column;
    background-size: cover;
    width: auto;
    height: 1000px;
  `,
  Place: styled.div`
    margin-top: 10%;

    height: 100px;
    background-color: black;
  `,
  First: styled.div`
    width: 400px;
    height: 300px;
    border-radius: 10px;
    background-color: red;
  `,
  Second: styled.div`
    width: 400px;
    height: 300px;
    border-radius: 10px;
    background-color: blue;
  `,
  Forms: styled.h3`
    font-style: oblique;
  `,
  Title: styled.h1`
    display: flex;
    justify-content: center;
    font-size: 30px;
    color: blueviolet;
  `,
};

function Arena() {
  const [addToTheArena, setSddToTheArena] = useState(null);
  const DB_URL = `http://localhost:3000`;
  const BASE_URL = `https://pokeapi.co/api/v2/pokemon/`;
  const [winner, setWinner] = useState("");

  useEffect(() => {
    axios.get(`${DB_URL}`);
  });

  useEffect(() => {
    axios
      .get(`${DB_URL}/arena/`)
      .then((res) => setSddToTheArena(res.data.map(({ id }) => +id)));
  }, []);

  if (!addToTheArena) return null;
  console.log("Walka", addToTheArena);
  return (
    <S.Page>
      {/* <S.First>
        <PokemonCard url={`${BASE_URL}`} DB_URL={DB_URL} /> */}
      {/* <S.Title> {addToTheArena[0].name}</S.Title>
        <S.Forms>
          height:
          {addToTheArena[0].height}
        </S.Forms>
        <S.Forms>
          base Experience:
          {addToTheArena[0].base_experience}
        </S.Forms>
        <S.Forms>
          weight:
          {addToTheArena[0].weight}
        </S.Forms>
        <S.Forms>
          ability
          {addToTheArena[0].ability}
        </S.Forms> */}
      {/* </S.First> */}
      {/* <S.Second>
        <PokemonCard url={`${BASE_URL}`} DB_URL={DB_URL} />
      </S.Second> */}
      <S.Arena>
        {addToTheArena?.map((id) => (
          <PokemonCard url={`${BASE_URL}${id}`} DB_URL={DB_URL} />
        ))}
      </S.Arena>
      <S.Przycisk>WALKA</S.Przycisk>
    </S.Page>
  );
}

export default Arena;
