import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PokemonCard from "../components/PokemonCard";

const IkonaFavorite = styled.div`
  color: ${({ isFavorite }) => (isFavorite ? "red" : "black")};
`;
const Page = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

function Ulubione({ DB_URL, BASE_URL }) {
  const [favorite, setFavorite] = useState();

  useEffect(() => {
    axios
      .get(`${DB_URL}/ulubione/`)
      .then((res) => setFavorite(res.data.map(({ id }) => +id)));
  }, []);
  console.log("ulubisone", favorite);

  if (!favorite) return null;
  return (
    <Page>
      {favorite?.map((id) => (
        <PokemonCard url={`${BASE_URL}${id}`} DB_URL={DB_URL} />
      ))}
    </Page>
  );
}

export default Ulubione;
