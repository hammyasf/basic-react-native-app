import React from "react";
import renderer from "react-test-renderer";

import Comment from "../../components/Comment";

describe("<Comment />", () => {
  it("has 2 children", () => {
    const tree = renderer
      .create(
        <Comment
          comment={{
            id: 1,
            name: "name",
            email: "email",
            body: "body",
          }}
        />
      )
      .toJSON();
    expect(tree.children.length).toBe(2);
  });
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Comment
          comment={{
            id: 1,
            name: "name",
            email: "email",
            body: "body",
          }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("has the correct name", () => {
    const tree = renderer
      .create(
        <Comment
          comment={{
            id: 1,
            name: "name",
            email: "email",
            body: "body",
          }}
        />
      )
      .toJSON();
    expect(tree.children[0].children[1].children[0].children[0]).toBe("name");
  });
});
