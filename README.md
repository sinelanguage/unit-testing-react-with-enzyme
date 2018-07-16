# unit-testing-with-enzyme

Welcome to the top level of the repo for React component unit-testing-with-enzyme.

This is designed to be a lerna repo with the following two directories:

-   `packages`
-   `demo-app`

`packages` contains the actual component modules.

`demo-app` contains an Electrode App that allows you to test and develop the components.

To start developing, first install the lerna dependencies at the top level:

```bash
npm install
```

And then bootstrap the modules under `packages`:

```bash
npm run bootstrap
```

To start playing with the included demo components:

```bash
cd demo-app
npm install
clap dev
```

Then open your browser to `http://localhost:3000`

# Enzyme

Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output.

So lets get started rendering react components in unit tests.  The key word here is `rendering`.

## Shallow Rendering

Shallow rendering is useful to constrain yourself to testing a component as a unit, and to ensure that your tests aren't indirectly asserting on behavior of child components.

### What does that mean?

It will render children but it will not allow you assert anything against them, but it will allow you to find them and confirm that they are there through standard DOM style selectors. 

```js
describe("components/unit-testing-with-enzyme", () => {
  const toMapOverAndRender = ["one", "two", "three"];
  describe("Mounting", () => {
    it("should render into the document", () => {
      const component = shallow(<UnitTestingWithEnzyme toMapOverAndRender={toMapOverAndRender} />);
      expect(component).to.not.be.null;
    });
  });
});
```

Once you have an instance of a component, you can treat it as an html element and perform standard DOM selections and actions on it through Enzymes API.

```js
describe("components/unit-testing-with-enzyme", () => {
  const toMapOverAndRender = ["one", "two", "three"];
  describe("Mounting", () => {

    it("should render 3 children", () => {
      const component = shallow(<UnitTestingWithEnzyme toMapOverAndRender={toMapOverAndRender} />);
      const numberOfExpectedChildren = 3;
      expect(component.find(".myClassName")).to.have.length(numberOfExpectedChildren);
    });

  });
});
```

You can trigger events on your component and check the results

```js
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
```

## Full Mounting of Component
Full DOM rendering is ideal for use cases where you have components that may interact with DOM APIs or need to test components that are wrapped in higher order components.

Full DOM rendering requires that a full DOM API be available at the global scope. This means that it must be run in an environment that at least “looks like” a browser environment. If you do not want to run your tests inside of a browser, the recommended approach to using mount is to depend on a library called jsdom which is essentially a headless browser implemented completely in JS.

Note: unlike shallow or static rendering, full rendering actually mounts the component in the DOM, which means that tests can affect each other if they are all using the same DOM. Keep that in mind while writing your tests and, if necessary, use .unmount() or something similar as cleanup.

```js
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
```