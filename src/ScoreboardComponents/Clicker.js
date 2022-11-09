import React, { useState, useEffect } from "react";
import { Grid, Typography, Button } from "@mui/material";

const Clicker = ({
  number,
  playerScore,
  setPlayerScore,
  setIsFull,
  buttonChangeView,
  resetClicker,
  setResetClicker,
  rowClosed,
  setRowClosed,
}) => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    if (rowClosed) {
      return null;
    }
    if (clickCount === 2) {
      setIsFull(true);
    }

    if (!rowClosed && clickCount > 2) {
      setPlayerScore(playerScore + number);
    }

    setClickCount(clickCount + 1);
  };

  useEffect(() => {
    if (resetClicker) {
      setClickCount(0);
      setResetClicker(false);
      setRowClosed(false);
    }
  }, [resetClicker, setResetClicker, setRowClosed]);

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
