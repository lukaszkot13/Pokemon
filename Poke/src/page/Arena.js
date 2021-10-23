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
    weight: 100px;
    height: 100px;
    background-color: black;
  `,
};

function Arena({ DB_URL, BASE_URL }) {
  const [addToTheArena, setSddToTheArena] = useState(null);

  useEffect(() => {
    axios
      .get(`${DB_URL}/arena/`)
      .then((res) => setSddToTheArena(res.data.map(({ id }) => +id)));
  }, []);
  console.log("Walka", addToTheArena);

  if (!addToTheArena) return null;
  return (
    <S.Page>
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
