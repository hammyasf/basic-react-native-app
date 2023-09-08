import React from "react";
import renderer from "react-test-renderer";

import Post from "../../components/Post";

describe("<Post />", () => {
  it("has 2 children", () => {
    const tree = renderer
      .create(<Post post={{ title: "title", body: "body" }} />)
      .toJSON();
    expect(tree.children.length).toBe(2);
  });
  it("renders correctly", () => {
    const tree = renderer
      .create(<Post post={{ title: "title", body: "body" }} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
