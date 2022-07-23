import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import Clicker from "./Clicker";

const Row = ({
  number,
  playerScore,
  playerTwoScore,
  setPlayerScore,
  setPlayerTwoScore,
}) => {
  const [playerOneFull, setPlayerOneFull] = useState(false);
  const [playerTwoFull, setPlayerTwoFull] = useState(false);

  //   const buttonChangeView = (clickCount) => {
  //     if (playerOneFull && playerTwoFull) {
  //       return "closed";
  //     }
  //     switch (clickCount) {
  //       case -1:
  //         return "closed";
  //       case 0:
  //         return "O";
  //       case 1:
  //         return "!";
  //       case 2:
  //         return "!!";
  //       case 3:
  //         return "!!!";
  //       default:
  //         return "!!!";
  //     }
  //   };

  return (
    <>
      <Clicker
        number={number}
        playerScore={playerScore}
        setPlayerScore={setPlayerScore}
        setIsFull={setPlayerOneFull}
        isFull={playerOneFull}
        // buttonChangeView={buttonChangeView}
      />
      <Grid item xs={4}>
        <Typography variant="h3">{number}</Typography>
      </Grid>
      <Clicker
        number={number}
        playerScore={playerTwoScore}
        setPlayerScore={setPlayerTwoScore}
        setIsFull={setPlayerTwoFull}
        isFull={playerTwoFull}
        // buttonChangeView={buttonChangeView}
      />
    </>
  );
};

export default Row;
