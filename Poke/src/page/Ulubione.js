import axios from "axios";
import React, { useState, useEffect } from "react";
// import styled from "styled-components";

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
// `;
// const Skils = styled.div`
//   display: flex;
//   justify-content: space-around;
// `;
// const Image = styled.img`
//   width: 400px;
//   height: 400px;
// `;
// const Container = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   justify-content: center;
//   padding: 1.5rem 0;
//   margin: 0.3rem;
//   border: 1px solid #efefef;
//   border-radius: 1.2rem;
//   min-width: 304px;
//   text-align: center;
//   box-shadow: 0 3px 15px rgba(0, 0, 0, 0.089);
//   background-color: mintcream;
// `;

// const Favorite = style.div`

// color: ${({ isFavourite }) => (isFavourite ? "red" : "black")};
// `;

function Ulubione({ DB_URL }) {
  const [favorite, setFavorite] = useState();

  useEffect(() => {
    axios.get(`${DB_URL}/ulubione/`).then((res) => setFavorite(res.data));
  }, []);
  console.log("ulubisone", favorite);

  if (!favorite) return null;
  return (
    <div>
      <div>{favorite?.[0].name}</div>
      <h1>{favorite?.[0].weight}</h1>
    </div>
  );
}

export default Ulubione;
