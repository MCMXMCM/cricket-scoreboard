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
      <Box height="100vh" backgroundColor="secondary.dark">
        <Box
          height="90vh"
          display="flex"
          justifyContent="center"
          flexDirection="column"
          backgroundColor="secondary.dark"
        >
          <AppBar position="static">
            <Typography
              sx={{ marginTop: "1vh", marginBottom: "1vh" }}
              align="center"
              variant="h4"
              component="div"
              backgroundColor="tertiary.light"
            >
              Simple Cricket Scoreboard
            </Typography>
          </AppBar>
          <Grid
            container
            columnSpacing={0}
            rowSpacing={0}
            sx={{
              textAlign: "center",
              color: "white",
            }}
          >
            <ScoreBoardHeaderFooter
              columnOne={playerOneTotal}
              columnTwo={
                <Button
                  sx={{
                    backgroundColor: "secondary.dark",
                    color: "white",
                  }}
                  onClick={resetGame}
                >
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
