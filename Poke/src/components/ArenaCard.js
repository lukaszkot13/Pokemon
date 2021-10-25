import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  padding: 1.5rem 0;
  margin: 0.3rem;
  border: 5px solid #efefef;
  border-radius: 3.2rem;
  min-width: 304px;
  text-align: center;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.089);
  background-color: mintcream;
`;
const Image = styled.img`
  width: 100px;
  height: 100px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Skils = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Titles = styled.h1`
  text-transform: capitalize;
  color: blue;
`;
const Title = styled.h4`
  font-size: 15px;
  color: blueviolet;
`;
const Forms = styled.h3`
  font-style: oblique;
`;
const DataName = styled.h3`
  color: green;
`;
const Id = styled.p`
  color: blue;
`;

function ArenaCard({
  image,
  name,
  id,
  height,
  base_experience,
  weight,
  ability,
}) {
  return (
    <>
      <Container>
        <Image src={image} alt="image" />
        <Wrapper>
          <Titles>{name}</Titles>
          <Skils>
            <Forms>
              <DataName>{height}</DataName>
              <Title>Height</Title>
            </Forms>
            <Forms>
              <DataName>{base_experience}</DataName>
              <Title>Base Experience</Title>
            </Forms>
          </Skils>
          <Skils>
            <Forms>
              <DataName>{ability}</DataName>
              <Title>Ability</Title>
            </Forms>
            <Forms>
              <DataName>{weight}</DataName>
              <Title>Weight</Title>
            </Forms>
          </Skils>
          <Id>#0{id}</Id>
        </Wrapper>
      </Container>
    </>
  );
}
export default ArenaCard;
