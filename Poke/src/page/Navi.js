import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {  Link } from "react-router-dom";
import { makeStyles} from "@material-ui/core";



const useStyles = makeStyles({
  Link: {
    color: 'inherit',
    textDecoration: "none",
  },
});

function Navi() {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pokedex
          </Typography>
          <Link className={classes.Link} to="/ulubione">
          <Button color="inherit">Ulubione</Button>
          </Link>
          
          <Link  className={classes.Link} to="/arena">
          <Button color="inherit">Arena</Button>
          </Link>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navi;
