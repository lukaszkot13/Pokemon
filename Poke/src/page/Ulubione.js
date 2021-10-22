import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Skils = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Image = styled.img`
  width: 200px;
  height: 250px;
  margin-left: 5%;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
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
`;

function Ulubione({ DB_URL }) {
  const [favorite, setFavorite] = useState();

  useEffect(() => {
    axios.get(`${DB_URL}/ulubione/`).then((res) => setFavorite(res.data));
  }, []);
  console.log("ulubisone", favorite);

  if (!favorite) return null;
  return (
    <div>
      <Container>
        <Image />

        <Wrapper>
          <h3>asd</h3>
          <Skils>
            <div>
              <h5>asd</h5>
              <h4>Height</h4>
            </div>
            <div>
              <h5></h5>
              <h4>Base Experience</h4>
            </div>
          </Skils>
          <Skils>
            <div>
              <h5></h5>
              <h4>Ability</h4>
            </div>
            <div>
              <h5></h5>
              <h4>Weight</h4>
            </div>
          </Skils>
          <small>Type: </small>
          <small>#0</small>
        </Wrapper>
      </Container>
    </div>
  );
}

export default Ulubione;
