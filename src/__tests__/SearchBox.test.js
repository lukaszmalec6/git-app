/* Example test for smart component.
   Testing if component renders corectyly and creating json snapshot.
   If snapshot was created during previous tests - check if snapshot matches"
   You can find snapshot in __tests__/_snapshots_   
   */

import React from "react";
import { shallowToJson } from "enzyme-to-json";
import SearchBox from "../components/smart/SearchBox.jsx";
import { Provider } from "react-redux";
import configureStore from "../redux/Store";
const store = configureStore();
describe("SearchBox", () => {
  it("should render correctly", () => {
    const output = render(
      <Provider store={store}>
        <SearchBox
          redirect={() => {
            return true;
          }}
          searchUser={() => {
            console.log("hi");
          }}
        />
      </Provider>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
