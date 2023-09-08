import React from "react";
import renderer from "react-test-renderer";

import Loading from "../../components/Loading";

describe("<Loading />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<Loading />).toJSON();
    expect(tree.children.length).toBe(1);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<Loading />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
