import "./App.css";
import {
  Grid,
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Typography,
} from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Row from "./Row";

import { useState } from "react";

function App() {
  const [playerOneTotal, setPlayerOneTotal] = useState(0);
  const [playerTwoTotal, setPlayerTwoTotal] = useState(0);
  const [resetClicker, setResetClicker] = useState(false);

  const numbers = [20, 19, 18, 17, 16, 15, 25];

  const resetGame = () => {
    setPlayerOneTotal(0);
    setPlayerTwoTotal(0);
    setResetClicker(true);
  };

  return (
    <div className="App">
      <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        flexDirection="column"
        backgroundColor="secondary.dark"
      >
        <Grid
          container
          spacing={1}
          sx={{
            textAlign: "center",
            color: "white",
          }}
        >
          <Grid item xs={4}>
            <Typography variant="h3">Player 1</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h3">Cricket</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h3">Player 2</Typography>
          </Grid>

          {numbers.map((number) => (
            <Row
              number={number}
              playerScore={playerOneTotal}
              playerTwoScore={playerTwoTotal}
              setPlayerScore={setPlayerOneTotal}
              setPlayerTwoScore={setPlayerTwoTotal}
              resetClicker={resetClicker}
              setResetClicker={setResetClicker}
            />
          ))}

          <Grid item xs={4}>
            <Typography variant="h3">{playerOneTotal}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h3">Totals</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h3">{playerTwoTotal}</Typography>
          </Grid>
        </Grid>

        <BottomNavigation
          sx={{
            backgroundColor: "secondary.dark",
            color: "white",
            marginTop: 5,
          }}
          showLabels
        >
          {/* <BottomNavigationAction
            label="Back"
            icon={<ArrowBackIcon color="tertiary" fontSize="large" />}
          /> */}
          <BottomNavigationAction
            onClick={resetGame}
            label="Reset"
            icon={<RestartAltIcon color="tertiary" fontSize="large" />}
          />
          {/* <BottomNavigationAction
            label="Share"
            icon={<ArrowForwardIcon color="tertiary" fontSize="large" />}
          /> */}
        </BottomNavigation>
      </Box>
    </div>
  );
}

export default App;
