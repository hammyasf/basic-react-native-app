import React from "react";
import renderer from "react-test-renderer";

import ErrorComponent from "../../components/ErrorComponent";

describe("<ErrorComponent />", () => {
  it("has 2 children", () => {
    const tree = renderer.create(<ErrorComponent />).toJSON();
    expect(tree.children[0].children.length).toBe(2);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<ErrorComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("has text", () => {
    const tree = renderer.create(<ErrorComponent />).toJSON();
    expect(tree.children[0].children[1].children[0]).toBe("An error occurred.");
  });
});
