/**
 * Client tests
 */
import React from "react";
import { shallow } from "enzyme";

import UnitTestingWithEnzyme from "src/components/unit-testing-with-enzyme";

describe("components/unit-testing-with-enzyme", () => {

  describe("Mounting", () => {
    it("should render into the document", () => {
      const component = shallow(<UnitTestingWithEnzyme />);
      expect(component).to.not.be.null;
    });

  });

});
