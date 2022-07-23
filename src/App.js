import "./App.css";
import {
  Grid,
  Button,
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Typography,
} from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { useState } from "react";

function App() {
  const [playerOneTally20, setPlayerOneTally20] = useState(0);
  const [playerOneTally19, setPlayerOneTally19] = useState(0);
  const [playerOneTally18, setPlayerOneTally18] = useState(0);
  const [playerOneTally17, setPlayerOneTally17] = useState(0);
  const [playerOneTally16, setPlayerOneTally16] = useState(0);
  const [playerOneTally15, setPlayerOneTally15] = useState(0);
  const [playerOneTallyB, setPlayerOneTallyB] = useState(0);
  const [playerOneTotal, setPlayerOneTotal] = useState(0);

  const [playerTwoTally20, setPlayerTwoTally20] = useState(0);
  const [playerTwoTally19, setPlayerTwoTally19] = useState(0);
  const [playerTwoTally18, setPlayerTwoTally18] = useState(0);
  const [playerTwoTally17, setPlayerTwoTally17] = useState(0);
  const [playerTwoTally16, setPlayerTwoTally16] = useState(0);
  const [playerTwoTally15, setPlayerTwoTally15] = useState(0);
  const [playerTwoTallyB, setPlayerTwoTallyB] = useState(0);
  const [playerTwoTotal, setPlayerTwoTotal] = useState(0);

  const numbers = [20, 19, 18, 17, 16, 15, "B"];

  const playerOneStateArray = [
    playerOneTally20,
    playerOneTally19,
    playerOneTally18,
    playerOneTally17,
    playerOneTally16,
    playerOneTally15,
    playerOneTallyB,
  ];
  const playerOneSetterArray = [
    setPlayerOneTally20,
    setPlayerOneTally19,
    setPlayerOneTally18,
    setPlayerOneTally17,
    setPlayerOneTally16,
    setPlayerOneTally15,
    setPlayerOneTallyB,
  ];

  const playerTwoStateArray = [
    playerTwoTally20,
    playerTwoTally19,
    playerTwoTally18,
    playerTwoTally17,
    playerTwoTally16,
    playerTwoTally15,
    playerTwoTallyB,
  ];

  const playerTwoSetterArray = [
    setPlayerTwoTally20,
    setPlayerTwoTally19,
    setPlayerTwoTally18,
    setPlayerTwoTally17,
    setPlayerTwoTally16,
    setPlayerTwoTally15,
    setPlayerTwoTallyB,
  ];

  const resetGame = () => {
    setPlayerOneTally20(0);
    setPlayerOneTally19(0);
    setPlayerOneTally18(0);
    setPlayerOneTally17(0);
    setPlayerOneTally16(0);
    setPlayerOneTally15(0);
    setPlayerOneTallyB(0);
    setPlayerOneTotal(0);

    setPlayerTwoTally20(0);
    setPlayerTwoTally19(0);
    setPlayerTwoTally18(0);
    setPlayerTwoTally17(0);
    setPlayerTwoTally16(0);
    setPlayerTwoTally15(0);
    setPlayerTwoTallyB(0);
    setPlayerTwoTotal(0);
  };

  const rows = (
    number,
    playerOneState,
    playerOneSetter,
    playerTwoState,
    playerTwoSetter
  ) => {
    const handleClick = (state, altState, total, setter, totalSetter) => {
      if (state >= 3 && altState >= 3) {
        setter(4);
        return;
      }
      if (state > 2 && number !== "B") {
        totalSetter(total + number);
      } else if (state > 2 && number === "B") {
        totalSetter(total + 25);
      } else {
        setter(state + 1);
      }
    };

    const scoreTicker = (mainState, altState, handler) => {
      const buttonChangeView = (state) => {
        switch (state) {
          case 0:
            return "O";
          case 1:
            return "!";
          case 2:
            return "!!";
          case 3:
            return "!!!";
          case 4:
            return "closed";
          default:
            return "?";
        }
      };

      return (
        <>
          <Grid item xs={4} onClick={handler}>
            <Button color="tertiary" fullWidth="true" variant="outlined">
              {mainState >= 3 && altState >= 3 ? (
                <>
                  <Typography variant="h3">Closed</Typography>
                </>
              ) : (
                <>
                  <Typography variant="h3">
                    {buttonChangeView(mainState)}
                  </Typography>
                </>
              )}
            </Button>
          </Grid>
        </>
      );
    };

    return (
      <>
        {scoreTicker(playerOneState, playerTwoState, () =>
          handleClick(
            playerOneState,
            playerTwoState,
            playerOneTotal,
            playerOneSetter,
            setPlayerOneTotal
          )
        )}

        <Grid item xs={4}>
          <Button color="tertiary" fontSize="large">
            <Typography variant="h3">{number}</Typography>
          </Button>
        </Grid>

        {scoreTicker(playerTwoState, playerOneState, () =>
          handleClick(
            playerTwoState,
            playerOneState,
            playerTwoTotal,
            playerTwoSetter,
            setPlayerTwoTotal
          )
        )}
      </>
    );
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

          {numbers.map((number, index) =>
            rows(
              number,
              playerOneStateArray[index],
              playerOneSetterArray[index],
              playerTwoStateArray[index],
              playerTwoSetterArray[index]
            )
          )}

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
          // value={value}
          // onChange={(event, newValue) => {
          //   // setValue(newValue);
          // }}
        >
          <BottomNavigationAction
            label="Back"
            icon={<ArrowBackIcon color="tertiary" fontSize="large" />}
          />
          <BottomNavigationAction
            onClick={resetGame}
            label="Reset"
            icon={<RestartAltIcon color="tertiary" fontSize="large" />}
          />
          <BottomNavigationAction
            label="Share"
            icon={<ArrowForwardIcon color="tertiary" fontSize="large" />}
          />
        </BottomNavigation>
      </Box>
    </div>
  );
}

export default App;
