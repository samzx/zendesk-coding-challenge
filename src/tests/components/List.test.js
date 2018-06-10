import React from "react";
import { shallow } from "enzyme";
import List from "../../components/List";

test("should render List correctly", () => {
  const wrapper = shallow(<List />);
  expect(wrapper).toMatchSnapshot();
});
