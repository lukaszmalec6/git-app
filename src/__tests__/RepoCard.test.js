/* Example test for dumb component.
   Testing if component renders corectyly and creating json snapshot.
   If snapshot was created during previous tests - check if snapshot matches"
   You can find snapshot in __tests__/_snapshots_   
   */

import React from "react";
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
