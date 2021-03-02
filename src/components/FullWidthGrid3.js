import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./FWG3.css";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
    // width: "100%",
    // height: "40px",
    // background: "#e19462",
    // borderRadius: "3px",
  },
}));

export default function FullWidthGrid3() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3} sm={3} >
          <button className={"btn-3"}>
            <span>MEMARLIQ ABİDƏLƏRİ</span>
          </button>
        </Grid>
        <Grid item xs={3} sm={3}>
          <button className={"btn-3"}>
            <span>BAĞ-PARK,MONOMENTAL VƏ </span>
          </button>
        </Grid>
        <Grid item xs={3} sm={3}>
          <button className={"btn-3"}>
            <span>ARXEOLOJİ ABİBƏLƏR</span>
          </button>
        </Grid>
        <Grid item xs={3} sm={3}>
          <button className={"btn-3"}>
            <span>DEKORATİV-TƏTBİQİ SƏNƏT </span>
          </button>
        </Grid>
      </Grid>
    </div>
  );
}
