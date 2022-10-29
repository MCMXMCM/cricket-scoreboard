import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import Clicker from "./Clicker";

const Row = ({
  number,
  playerScore,
  playerTwoScore,
  setPlayerScore,
  setPlayerTwoScore,
  resetClicker,
  setResetClicker,
}) => {
  const [playerOneFull, setPlayerOneFull] = useState(false);
  const [playerTwoFull, setPlayerTwoFull] = useState(false);
  const [rowClosed, setRowClosed] = useState(false);

  const buttonChangeView = (clickCount) => {
    if (playerOneFull && playerTwoFull) {
      setRowClosed(true);
      return "closed";
    }
    switch (clickCount) {
      case -1:
        return "closed";
      case 0:
        return "O";
      case 1:
        return "!";
      case 2:
        return "!!";
      case 3:
        return "!!!";
      default:
        return "!!!";
    }
  };

  useEffect(() => {
    if (resetClicker) {
      setPlayerOneFull(false);
      setPlayerTwoFull(false);
    }
  }, [resetClicker]);

  return (
    <>
      <Clicker
        number={number}
        playerScore={playerScore}
        setPlayerScore={setPlayerScore}
        setIsFull={setPlayerOneFull}
        isFull={playerOneFull}
        buttonChangeView={buttonChangeView}
        resetClicker={resetClicker}
        setResetClicker={setResetClicker}
        rowClosed={rowClosed}
        setRowClosed={setRowClosed}
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
        buttonChangeView={buttonChangeView}
        resetClicker={resetClicker}
        setResetClicker={setResetClicker}
        rowClosed={rowClosed}
        setRowClosed={setRowClosed}
      />
    </>
  );
};

export default Row;
