import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import RepoCard from "../components/dumb/RepoCard.jsx";
describe("RepoCard", () => {
  it("should render correctly", () => {
    const output = shallow(
      <RepoCard
        name="something"
        description="something"
        lang="something"
        url="something"
        stars={512}
        watchers={1024}
      />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
