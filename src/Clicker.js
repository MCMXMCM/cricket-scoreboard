import React, { useState } from "react";
import { Grid, Typography, Button } from "@mui/material";

const Clicker = ({
  number,
  playerScore,
  setPlayerScore,
  isFull,
  setIsFull,
  playerOneFull,
  playerTwoFull,
}) => {
  const [clickCount, setClickCount] = useState(0);

  const buttonChangeView = (clickCount) => {
    if (playerOneFull && playerTwoFull) {
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

  const handleClick = () => {
    setClickCount(clickCount + 1);
    if (clickCount >= 3) {
      setIsFull(true);
      setPlayerScore(playerScore + number);
    }
  };

  return (
    <>
      <Grid item xs={4}>
        <Button onClick={handleClick} color="tertiary" fullWidth variant="text">
          <Typography variant="h3">{buttonChangeView(clickCount)}</Typography>
        </Button>
      </Grid>
    </>
  );
};

export default Clicker;
