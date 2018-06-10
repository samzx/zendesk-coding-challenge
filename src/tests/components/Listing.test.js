import React from "react";
import { shallow } from "enzyme";
import Listing from "../../components/Listing";

test("should render Listing correctly", () => {
  const wrapper = shallow(<Listing />);
  expect(wrapper).toMatchSnapshot();
});
