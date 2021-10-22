import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

import PokemonCard from "../components/PokemonCard";

const S = {
  Arena: styled.div`
    display: flex;
    width: auto;
    height: 600px;
    background-color: red;
    && {
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
    background-color: red;
    align-items: center;
  `,
};

function Arena({ DB_URL, BASE_URL }) {
  const [fight, setFight] = useState();

  useEffect(() => {
    axios
      .get(`${DB_URL}/arena/`)
      .then((res) => setFight(res.data.map(({ id }) => +id)));
  }, []);
  console.log("Walka", fight);

  if (!fight) return null;
  return (
    <S.Page>
      <S.Arena>
        {fight?.map((id) => (
          <PokemonCard url={`${BASE_URL}${id}`} />
        ))}
      </S.Arena>
      <S.Przycisk>WALKA</S.Przycisk>
    </S.Page>
  );
}

export default Arena;
