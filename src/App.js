import { useState } from "react";
import "./App.css";
import { AppBar, Grid, Box, Typography, Button } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import ScoreBoardHeaderFooter from "./ScoreboardComponents/ScoreBoardHeaderFooter";
import Row from "./ScoreboardComponents/Row";

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
        display="flex"
        alignItems="center"
        alignContent="center"
        justifyContent="center"
        height="100vh"
        backgroundColor="secondary.dark"
      >
        <Box maxWidth="600px" maxHeight="900px">
          <AppBar position="static">
            <Typography
              align="center"
              variant="h4"
              component="div"
              backgroundColor="tertiary.light"
            >
              Simple Cricket Scoreboard
            </Typography>
          </AppBar>
          <Grid
            textAlign="center"
            color="white"
            display="flex"
            alignItems="center"
            container
          >
            <ScoreBoardHeaderFooter
              columnOne={playerOneTotal}
              columnTwo={
                <Button onClick={resetGame}>
                  <RestartAltIcon color="tertiary" fontSize="large" />
                </Button>
              }
              columnThree={playerTwoTotal}
            />
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
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default App;
