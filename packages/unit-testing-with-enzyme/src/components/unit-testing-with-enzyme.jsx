// This is a bundled demo
// you should remove this to work on
// your own component.

import React from "react";
import propTypes from "prop-types";

// remember to also remove the bundled demo CSS files
// from ../styles

import styles from "../styles/unit-testing-with-enzyme.css";

export default class UnitTestingWithEnzyme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Unit Testing With Enzyme"
    };
  }
  renderChildren() {
    // return this.props.numberOfTimesToRenderChild.map(
    //   (num) => (<li key={num}>I am {num}</li>)
    // )
    return null;
  }
  render() {
    return (
      <div className={styles.container}>
        <h4>{this.state.title}</h4>
      </div>
    );
  }
}

UnitTestingWithEnzyme.displayName = "UnitTestingWithEnzyme";

UnitTestingWithEnzyme.propTypes = {
  numberOfTimesToRenderChild: propTypes.number
};

UnitTestingWithEnzyme.defaultProps = {};
