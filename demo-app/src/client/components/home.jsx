import React from "react";
import { connect } from "react-redux";
import { IntlProvider } from "react-intl";

import {UnitTestingWithEnzyme} from "unit-testing-with-enzyme";
import "../styles/raleway.css";
import "../styles/skeleton.css";
import custom from "../styles/custom.css";
import electrodePng from "../images/electrode.png";

const locale = "en";

export class Home extends React.Component {
  render() {
    const toMapOverAndRender = ["one", "two", "three"];
    return (
      <IntlProvider locale={locale}>
        <div className={custom.demoAppContainer}>
          <h2>
          Hello from {" "}
          <a href="https://github.com/electrode-io">{"Electrode"} <img src={electrodePng} /></a>
          </h2>
          <UnitTestingWithEnzyme toMapOverAndRender={toMapOverAndRender} />
      </div>
      </IntlProvider>
    );
  }
}

export default connect((state) => state)(Home);
