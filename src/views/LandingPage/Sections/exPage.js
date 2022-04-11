import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import CustomInput from "components/CustomInput/CustomInput.js";
// import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function exPage() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Policy Of Company</h2>
          <h4
            className={classes.description}
            style={{ textAlign: "justify", color: "#000" }}
          >
            <b>
              Punjab Online Lucky committee Name of Trust <br />
              (Monthly Committee 5000) (Term 3 years) Prize: CG 125 Honda 300
              members: 300 prizes{" "}
            </b>
            <br /> Guarantee through bank cheque. <br />
            <b>1: </b>If a committee is short, the name will not be included in
            the lucky draw.
            <br />
            <b>2: </b> In case of 3 shortcoming committees, the committee will
            be canceled and the amount deposited will be considered confiscated.{" "}
            <br />
            <b>3: </b> If any member dies within a period of 3 years, the
            remaining installments will be waived by paying the committee.{" "}
            <br />
            <b>4: </b>The committee will be drawn online in different cities of
            Punjab.
          </h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}
