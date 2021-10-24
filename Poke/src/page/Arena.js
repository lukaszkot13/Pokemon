import { style } from "@mui/system";
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
    background-image: url("https://images.unsplash.com/photo-1542779283-429940ce8336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 300px;
    padding: 1.5rem 0;
    margin: 0.3rem;
    border: 5px solid #efefef;
    border-radius: 3.2rem;
    min-width: 304px;
    text-align: center;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.089);
    background-color: mintcream;
  `,
  Second: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 300px;
    padding: 1.5rem 0;
    margin: 0.3rem;
    border: 5px solid #efefef;
    border-radius: 3.2rem;
    min-width: 304px;
    text-align: center;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.089);
    background-color: mintcream;
  `,
  Forms: styled.h3`
    font-style: oblique;
  `,
  Title: styled.h1`
    font-size: 15px;
    color: blueviolet;
  `,
};

function Arena({ DB_URL, BASE_URL }) {
  const [addToTheArena, setSddToTheArena] = useState(null);
  const [first, setFirst] = useState();
  const [second, setSecond] = useState();
  const [winner, setWinner] = useState("");

  useEffect(() => {
    axios.get(`${DB_URL}/arena/`).then((res) => setSddToTheArena(res.data));
  }, []);

  if (!addToTheArena) return null;
  console.log("Walka", addToTheArena);
  return (
    <S.Page>
      <S.Arena>
        <S.First>
          <S.Title> {addToTheArena[0].name}</S.Title>
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
          </S.Forms>
        </S.First>
        <S.Przycisk>WALKA</S.Przycisk>
        <S.Second>
          <S.Title> {addToTheArena[1].name}</S.Title>
          <S.Forms>
            height:
            {addToTheArena[1].height}
          </S.Forms>
          <S.Forms>
            base Experience:
            {addToTheArena[1].base_experience}
          </S.Forms>
          <S.Forms>
            weight:
            {addToTheArena[1].weight}
          </S.Forms>
          <S.Forms>
            ability
            {addToTheArena[1].ability}
          </S.Forms>
        </S.Second>
      </S.Arena>
    </S.Page>
  );
}

export default Arena;
