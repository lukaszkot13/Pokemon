import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const S = {
  Arena: styled.div`
    display: flex;
    width: auto;
    height: 600px;
    background-color: red;
    justify-content: space-around;
  `,
  StanowiskoPierwsze: styled.div`
    width: 400px;
    height: 400px;
    margin-top: 3%;
    background-color: aqua;
  `,
  StanowiskoDrugie: styled.div`
    width: 400px;
    height: 400px;
    margin-top: 3%;
    background-color: beige;
  `,
  Przycisk: styled.button`
    width: 300px;
    height: 150px;
    margin-top: 15%;
    border-radius: 10%;
  `,
};

function Arena({ DB_URL }) {
  const [fight, setFight] = useState();

  useEffect(() => {
    axios.get(`${DB_URL}/arena/`).then((res) => setFight(res.data));
  }, []);
  console.log("Walka", fight);

  if (!fight) return null;
  return (
    <div>
      <S.Arena>
        <S.StanowiskoPierwsze>{fight?.[0].name}</S.StanowiskoPierwsze>
        <S.Przycisk>WALKA</S.Przycisk>
        <S.StanowiskoDrugie>{fight?.[1].name}</S.StanowiskoDrugie>
      </S.Arena>
    </div>
  );
}

export default Arena;
