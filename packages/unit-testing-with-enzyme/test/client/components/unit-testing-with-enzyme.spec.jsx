/**
 * Client tests
 */
import React from "react";
import { shallow, mount } from "enzyme";

import UnitTestingWithEnzyme from "src/components/unit-testing-with-enzyme";

describe("components/unit-testing-with-enzyme", () => {
  const toMapOverAndRender = ["one", "two", "three"];
  describe("Shallow Rendering", () => {
    it("should render into the document", () => {
      const component = shallow(
        <UnitTestingWithEnzyme toMapOverAndRender={toMapOverAndRender} />
      );
      expect(component).to.not.be.null;
    });

    it("should render 3 children", () => {
      const component = shallow(
        <UnitTestingWithEnzyme toMapOverAndRender={toMapOverAndRender} />
      );
      const numberOfExpectedChildren = 3;
      expect(component.find(".myClassName")).to.have.length(
        numberOfExpectedChildren
      );
    });

    it("Should change the title when I click a button", () => {
      const oldTitle = "Unit Testing With Enzyme";
      const newTitle = "New Title";
      const component = shallow(
        <UnitTestingWithEnzyme toMapOverAndRender={toMapOverAndRender} />
      );
      expect(component.state("title")).to.equal(oldTitle);
      const button = component.find("button");
      button.simulate("click");
      expect(component.state("title")).to.equal(newTitle);
    });
  });

  describe("Full Mounting", function() {
    it("should validate anotherProp value", () => {
      const component = mount(
        <UnitTestingWithEnzyme
          toMapOverAndRender={toMapOverAndRender}
          anotherProp="Another Prop"
        />
      );
      expect(component.props().anotherProp).to.equal("Another Prop");
      component.unmount();
    });
  });
});
