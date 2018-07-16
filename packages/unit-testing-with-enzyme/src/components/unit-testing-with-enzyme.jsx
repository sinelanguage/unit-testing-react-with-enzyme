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
  changeTitle() {
    return this.setState({
      title: "New Title"
    });
  }
  renderChildren() {
    return this.props.toMapOverAndRender.map(
      (item, i) => (<li className="myClassName" key={i}>I am {item}</li>)
    );
  }
  render() {
    return (
      <div className={styles.container}>
        <h4>{this.state.title}</h4>
        <ul>{this.renderChildren()}</ul>
        <button onClick={this.changeTitle.bind(this)}>Change Title</button>
      </div>
    );
  }
}

UnitTestingWithEnzyme.displayName = "UnitTestingWithEnzyme";

UnitTestingWithEnzyme.propTypes = {
  toMapOverAndRender: propTypes.array
};

UnitTestingWithEnzyme.defaultProps = {};
