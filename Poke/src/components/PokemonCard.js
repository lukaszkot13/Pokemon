import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

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
  button: {
    "align-items": "center",
    "justify-content": "center",
    height: "50px",
    width: "950px",
    "border-radius": "1.1rem",
    color: "red",
  },
});

function PokemonCard({ url, setPokemon, pokemon }) {
  const classes = useStyles();

  const history = useHistory();

  useEffect(() => {
    axios.get(`${url}`).then((response) => {
      setPokemon(response.data);
    });
  }, []);
  console.log("PokemonCard", pokemon);

  return (
    <div>
      <div className={classes.container}>
        <div className="number">
          <small>#0{}</small>
        </div>
        <img className={classes.image} />
        <div className={classes.wrapper}>
          <h3>{}</h3>
          <div className={classes.umiejetnosci}>
            <div className={classes.ustawienie}>
              <h5>hh</h5>
              <h4>Height</h4>
            </div>
            <div className={classes.ustawienie}>
              <h5>BE</h5>
              <h4>Base Experience</h4>
            </div>
          </div>
          <div>
            <FavoriteBorderOutlinedIcon />
          </div>
          <div className={classes.umiejetnosci}>
            <div className={classes.ustawienie}>
              <h5>A</h5>
              <h4>Ability</h4>
            </div>
            <div className={classes.ustawienie}>
              <h5>W</h5>
              <h4>Weight</h4>
            </div>
          </div>
          <small>Type: T</small>
        </div>
      </div>
      <button
        className={classes.button}
        onClick={() => history.push(`/`)}
        variant="contained"
      >
        Strona Główna
      </button>
    </div>
  );
}

export default PokemonCard;
