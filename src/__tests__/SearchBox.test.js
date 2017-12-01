import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import SearchBox from "../components/smart/SearchBox.jsx";
import { Provider } from "react-redux";
import configureStore from "../redux/Store";
const store = configureStore();
it("should handle the click event", () => {
  window.alert = jest.fn();
  const output = shallow(
    <Provider store={store}>
      <SearchBox
        searchUser={() => {
          console.log("hi");
        }}
      />
    </Provider>
  );

  output.simulate("click");
  expect(window.alert).toHaveBeenCalledWith("clicked");
});
