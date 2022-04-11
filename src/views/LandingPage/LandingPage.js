import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import SectionCarousel from "../Components/Sections/SectionCarousel";
import WorkSection from "./Sections/WorkSection.js";
import Expage from "./Sections/exPage";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Punjab Online Lucky Committee"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/honda3.jpg").default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              {/* <h1 className={classes.title}>Punjab Online Lucky Committee</h1> */}
              {/* <h4>
                Punjab Online Lucky CommitteeFvast is one of the most popular taxi companies in Istanbul with
                over 34,000 taxi drivers and over 200,000 registered users.
                Focused on safety, wherever you go.
              </h4> */}
              <br />
              {/* <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=DS-raAyMxl4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button> */}
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <Expage />
          <TeamSection />
          <SectionCarousel />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
