import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import AdjustOutlinedIcon from "@mui/icons-material/AdjustOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
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
      return "🚫";
    }
    switch (clickCount) {
      case -1:
        return "🚫";
      case 0:
        return <CircleOutlinedIcon fontSize="large" />;
      case 1:
        return <AdjustOutlinedIcon fontSize="large" />;
      case 2:
        return <AddCircleOutlineOutlinedIcon fontSize="large" />;
      case 3:
        return "💰";
      default:
        return "💰";
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
        <Typography variant="h2">{number}</Typography>
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
