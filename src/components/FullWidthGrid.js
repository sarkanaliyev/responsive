import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./FWG2.css";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: "green",
    paddingBottom:"30px"
  },
  paper: {
    // padding: theme.spacing(2),
    // textAlign: "center",
    // color: theme.palette.text.secondary,
    // width: "100%",
    // fontSize: "14px",
    // backgroundColor: "green",
    // margin: "0",
    // padding: "0",
    // margin:"100px"
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={4} sm={4}>
          <p className={"paper"}>Abidənin ünvanı:</p>
        </Grid>
        <Grid item xs={4} sm={4}>
          <p className={"paper"}>Abidənin tarixi: </p>
        </Grid>
        <Grid item xs={4} sm={4}>
          <p className={"paper"}>Əhəmiyyət dərəcəsi: </p>
        </Grid>
        <Grid item xs={4} sm={4}>
          <p className={"paper"}>Qarğabazar kəndi</p>
        </Grid>
        <Grid item xs={4} sm={4}>
          <p className={"paper"}>XVII əsr</p>
        </Grid>
        <Grid item xs={4} sm={4}>
          <p className={"paper"}>Yerli əhəmiyyətli</p>
        </Grid>
      </Grid>
    </div>
  );
}
