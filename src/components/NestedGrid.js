import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Agdam from "../assets/Agdam.jpg";
import Cebrayil from "../assets/rcebrayil.jpg";
import Fuzuli from "../assets/rfuzuli.jpg";
import Xankendi from "../assets/rxankendi.jpg";
import Xocali from "../assets/rxocali.jpg";
import Xocavend from "../assets/xocavendr.jpg";
import Kelbecer from "../assets/rkelbecer.jpg";
import Qubadli from "../assets/rqubadli.jpg";
import qazax from "../assets/rqazax.jpg";
import lacin from "../assets/rlacin.jpg";
import susa from "../assets/rsusa.jpg";
import zengilan from "../assets/rzengilan.jpg";

import Background from "../assets/govher-aga.jpg";
import "./NestedGrid.css";
import { AiOutlineRight } from "react-icons/ai";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor:"red",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    // color: theme.palette.text.secondary,
    width: "100%",
    // height: "180px",
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        {[
          { name: "Ağdam", bgimage: Agdam, route: "/agdam" },
          { name: "Cəbrayıl", bgimage: Cebrayil, route: "/cebrayil" },
          { name: "Füzuli", bgimage: Fuzuli, route: "/abideler" },
          // { name: "Xankəndi", bgimage: Xankendi, route: "/xankendi" },
          { name: "Xocalı", bgimage: Xocali, route: "/xocali" },
          { name: "Xocavənd", bgimage: Xocavend, route: "/xocavend" },
          { name: "Kəlbəcər", bgimage: Kelbecer, route: "/kelbecer" },
          { name: "Qubadlı", bgimage: Qubadli, route: "/qubadli" },
          { name: "Qazax", bgimage: qazax, route: "/qazax" },
          { name: "Laçın", bgimage: lacin, route: "/lacin" },
          { name: "Şuşa", bgimage: susa, route: "/susa" },
          { name: "Zəngilan", bgimage: zengilan,route: "/zengilan" },
        ].map((value) => (
          <Grid item xs={12} sm={6} md={3}>
            <a href={value.route}>
              <div
                className={classes.paper}
                className="nested-rayon"
                style={{ backgroundImage: `url(${value.bgimage})` }}
              >
                <p className="nested-text">{value.name}</p>
                <AiOutlineRight color={"white"} className="aioutline" />
              </div>
            </a>
            {/* <img src={value} className={classes.paper} /> */}
          </Grid>
        ))}
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}
