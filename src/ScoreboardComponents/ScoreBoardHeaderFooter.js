import React from "react";
import { Grid, Typography } from "@mui/material";

const ScoreBoardHeaderFooter = ({ columnOne, columnTwo, columnThree }) => (
  <>
    <Grid item xs={4}>
      <Typography variant="h3">{columnOne}</Typography>
    </Grid>
    <Grid item xs={4}>
      <Typography variant="h4">{columnTwo}</Typography>
    </Grid>
    <Grid item xs={4}>
      <Typography variant="h3">{columnThree}</Typography>
    </Grid>
  </>
);

export default ScoreBoardHeaderFooter;
