import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import qal1 from "../assets/qal1.png";
import qal2 from "../assets/qal2.png";
import qal3 from "../assets/qal3.png";
import qal4 from "../assets/qal4.png";

import "./FWG.css";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(2),
    // textAlign: "center",
    // color: theme.palette.text.secondary,
    // width: "100%",
    fontSize: "28px",
  },
}));

export default function FullWidthGrid2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={6}>
          <img src={qal1} className="qal"/>
        </Grid>
        <Grid item xs={6} sm={6}>
          <img src={qal2} className="qal"/>
        </Grid>
        <Grid item xs={6} sm={6}>
          <img src={qal3} className="qal"/>
        </Grid>
        <Grid item xs={6} sm={6}>
          <img src={qal4} className="qal"/>
        </Grid>
      </Grid>
    </div>
  );
}
