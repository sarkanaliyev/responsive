import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Agdam from "../assets/Agdam.png";

import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import four from "../assets/four.png";
import five from "../assets/five.png";
import six from "../assets/six.png";
import seven from "../assets/sevenn.png";
import eight from "../assets/eightt.png";

import karvansaray from "../assets/karvansaray.JPG";
import karvansaraysonra from "../assets/karvansaray-sonra.jpeg";
import karvansarayarxiv from "../assets/karvansaray-arxiv.jpeg";
import govheraga from "../assets/govher-aga.jpg";
import susaqala from "../assets/susaqala.jpeg";
import "./AbidelerGrid.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(1),
    textAlign: "center",
    // color: theme.palette.text.secondary,
    width: "100%",
    // height: "100%",
    // height: "180px",
    cursor: "pointer",
  },
}));

export default function AbidelerGrid() {
  const classes = useStyles();

  const arr = [
    {
      pic: susaqala,
      name: "Karvansaray, XVII əsr, Qarğabazar kəndi",
      route: "natavan",
    },
    {
      pic: two,
      name: "Hacı Ələkbər məscidi, XVII əsr",
      route: "detal",
    },
    { pic: three, name: "Məscid, XVII əsr, Qarğabazar kəndi", route: "detal" },
    { pic: four, name: "Türbə, XVIII əsr, Qarğabazar kəndi", route: "detal" },
    { pic: five, name: "Məscid, XIX əsr, Qacar kəndi", route: "detal" },
    {
      pic: six,
      name: "Məscid, 1889-cu il, Horadiz kəndi",
      route: "detal",
    },
    {
      pic: seven,
      name: "Türbə, XIX əsr, Aşağı Seyidəhmədli kəndi",
      route: "detal",
    },
    { pic: eight, name: "Məscid, XVIII əsr, Qoçəhmədli kəndi", route: "detal" },
  ];
  function FormRow() {
    return (
      <React.Fragment>
        {arr.map((value) => (
          <Grid item xs={12} sm={6} md={3}>
            <a href={"/" + value.route}>
              <img src={value.pic} className={classes.paper} />
            </a>
            <p className="abide-ad">{value.name}</p>
          </Grid>
        ))}
        {/* <Grid item xs={12} sm={6} md={3}>
          <img src={Agdam} className={classes.paper} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <img src={Agdam} className={classes.paper} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <img src={Agdam} className={classes.paper} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <img src={Agdam} className={classes.paper} />
        </Grid> */}
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        {/* <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid> */}
      </Grid>
    </div>
  );
}
