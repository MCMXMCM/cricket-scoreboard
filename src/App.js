import "./App.css";
import {
  Grid,
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Typography,
} from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Row from "./Row";

import { useState } from "react";

function App() {
  const [playerOneTotal, setPlayerOneTotal] = useState(0);
  const [playerTwoTotal, setPlayerTwoTotal] = useState(0);

  const numbers = [20, 19, 18, 17, 16, 15, 25];

  const resetGame = () => {
    setPlayerOneTotal(0);
    setPlayerTwoTotal(0);
  };

  // const rows = (
  //   number,
  //   playerOneState,
  //   playerOneSetter,
  //   playerTwoState,
  //   playerTwoSetter
  // ) => {
  //   const handleClick = (state, altState, total, setter, totalSetter) => {
  //     if (state >= 3 && altState >= 3) {
  //       setter(4);
  //       return;
  //     }
  //     if (state > 2 && number !== "B") {
  //       totalSetter(total + number);
  //     } else if (state > 2 && number === "B") {
  //       totalSetter(total + 25);
  //     } else {
  //       setter(state + 1);
  //     }
  //   };

  // const scoreTicker = (mainState, altState, handler) => {
  //   const buttonChangeView = (state) => {
  //     switch (state) {
  //       case 0:
  //         return "O";
  //       case 1:
  //         return "!";
  //       case 2:
  //         return "!!";
  //       case 3:
  //         return "!!!";
  //       case 4:
  //         return "closed";
  //       default:
  //         return "?";
  //     }
  //   };

  //   return (
  //     <>
  //       <Grid item xs={4} onClick={handler}>
  //         <Button color="tertiary" fullWidth="true" variant="outlined">
  //           {mainState >= 3 && altState >= 3 ? (
  //             <>
  //               <Typography variant="h3">Closed</Typography>
  //             </>
  //           ) : (
  //             <>
  //               <Typography variant="h3">
  //                 {buttonChangeView(mainState)}
  //               </Typography>
  //             </>
  //           )}
  //         </Button>
  //       </Grid>
  //     </>
  //   );
  // };

  // return (
  //   <>
  //     {scoreTicker(playerOneState, playerTwoState, () =>
  //       handleClick(
  //         playerOneState,
  //         playerTwoState,
  //         playerOneTotal,
  //         playerOneSetter,
  //         setPlayerOneTotal
  //       )
  //     )}

  //     <Grid item xs={4}>
  //       <Button color="tertiary" fontSize="large">
  //         <Typography variant="h3">{number}</Typography>
  //       </Button>
  //     </Grid>

  //     {scoreTicker(playerTwoState, playerOneState, () =>
  //       handleClick(
  //         playerTwoState,
  //         playerOneState,
  //         playerTwoTotal,
  //         playerTwoSetter,
  //         setPlayerTwoTotal
  //       )
  //     )}
  //   </>
  // );
  // };

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
