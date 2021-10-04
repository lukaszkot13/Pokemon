import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";

function Navi() {
  const history = useHistory();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pokedex
          </Typography>

          <Button color="inherit" onClick={() => history.push("/ulubiole")}>
            Ulubione
          </Button>

          <Button color="inherit">Arena</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navi;
