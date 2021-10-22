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
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
  `,
  Skils: styled.div`
    display: flex;
    justify-content: space-around;
  `,
  Image: styled.img`
    width: 100px;
    height: 130px;
    margin-top: 3%;
  `,
  Container: styled.div`
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
  `,
  Usun: styled.button`
    width: 150px;
    height: 20px;
    border-radius: 10%;
  `,
};

function Arena({ DB_URL }) {
  const [fight, setFight] = useState();
  const [pokeArena, setPokeArena] = useState(null);

  useEffect(() => {
    axios.get(`${DB_URL}/arena/`).then((res) => setFight(res.data));
  }, []);
  console.log("Walka", fight);

  useEffect(() => {
    const arenaPokemon = pokeArena?.map((item) => item.id).includes(fight.id);
    setPokeArena(arenaPokemon);
  }, [pokeArena]);

  const deleteArena = () => {
    axios
      .delete(`${DB_URL}/arena/${fight.id}`)
      .then((res) => setFight(res.data));
  };

  if (!fight) return null;
  return (
    <div>
      <S.Arena>
        <S.StanowiskoPierwsze>
          <S.Container>
            <S.Usun onClick={() => deleteArena()}>Usun z Areny</S.Usun>
            <S.Image />

            <S.Wrapper>
              <h3></h3>
              <S.Skils>
                <div>
                  <h5></h5>
                  <h4>Height</h4>
                </div>
                <div>
                  <h5></h5>
                  <h4>Base Experience</h4>
                </div>
              </S.Skils>
              <S.Skils>
                <div>
                  <h5></h5>
                  <h4>Ability</h4>
                </div>
                <div>
                  <h5></h5>
                  <h4>Weight</h4>
                </div>
              </S.Skils>
              <small>Type: </small>
              <small>#0</small>
            </S.Wrapper>
          </S.Container>
        </S.StanowiskoPierwsze>
        <S.Przycisk>WALKA</S.Przycisk>
        <S.StanowiskoDrugie>
          <S.Container>
            <S.Usun>Usun z Areny</S.Usun>
            <S.Image />

            <S.Wrapper>
              <h3></h3>
              <S.Skils>
                <div>
                  <h5></h5>
                  <h4>Height</h4>
                </div>
                <div>
                  <h5></h5>
                  <h4>Base Experience</h4>
                </div>
              </S.Skils>
              <S.Skils>
                <div>
                  <h5></h5>
                  <h4>Ability</h4>
                </div>
                <div>
                  <h5></h5>
                  <h4>Weight</h4>
                </div>
              </S.Skils>
              <small>Type: </small>
              <small>#0</small>
            </S.Wrapper>
          </S.Container>
        </S.StanowiskoDrugie>
      </S.Arena>
    </div>
  );
}

export default Arena;
