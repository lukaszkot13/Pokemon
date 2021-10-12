import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    "flex-direction": "column",
    width: "100%",
  },
  umiejetnosci: {
    display: "flex",
    justifyContent: " space-around",
  },
  height: {
    display: "flex",
    flexDirection: "column",
  },
  image: {
    width: "120px",
    height: " 120px",
  },
  container: {
    display: "flex",
    "flex-direction": "column",
    "align-items": "center",
    "justify-content": "center",
    padding: "1.5rem 0",
    margin: "0.3rem",
    border: "1px solid #efefef",
    "border-radius": "1.2rem",
    "min-width": "304px",
    "text-align": "center",
    "box-shadow": " 0 3px 15px rgba(0, 0, 0, 0.089)",
    "background-color": "mintcream",
  },
});

const PokemonThumb = ({
  url,
  id,
  image,
  name,
  type,
  height,
  weight,
  ability,
  baseExperience,
}) => {
  const classes = useStyles();
  const [poke, setPoke] = useState([]);
  const history = useHistory();

  const handleClick = () => {
    history.push(`/${poke.name}`);
  };

  useEffect(() => {
    axios.get(`${url}`).then((response) => {
      setPoke(response.data);
      // setPoke((currentlist) => [...currentlist, response.data]);
    });
  }, []);
  console.log("poke", poke);

  return (
    <div
      className={classes.container}
      onClick={handleClick}
      data-name={poke.name}
    >
      <div className="number">
        <small>#0{poke?.id}</small>
      </div>
      <img
        className={classes.image}
        src={poke?.sprites?.other.dream_world.front_default}
        alt={name}
      />
      <div className={classes.wrapper}>
        <h3>{poke.name}</h3>
        <div className={classes.umiejetnosci}>
          <div className={classes.ustawienie}>
            <h5>{poke.height}</h5>
            <h4>Height</h4>
          </div>
          <div className={classes.ustawienie}>
            <h5>{poke.base_experience}</h5>
            <h4>Base Experience</h4>
          </div>
        </div>
        <div className={classes.umiejetnosci}>
          <div className={classes.ustawienie}>
            <h5>{poke?.abilities?.[0].ability.name}</h5>
            <h4>Ability</h4>
          </div>
          <div className={classes.ustawienie}>
            <h5>{poke.weight}</h5>
            <h4>Weight</h4>
          </div>
        </div>
        <small>Type: {poke?.types?.[0].type.name}</small>
      </div>
    </div>
  );
};

export default PokemonThumb;
