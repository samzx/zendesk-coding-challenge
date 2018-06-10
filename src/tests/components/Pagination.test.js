import React from "react";
import { shallow } from "enzyme";
import Pagination from "../../components/Pagination";

test("should render Pagination correctly", () => {
  const wrapper = shallow(<Pagination />);
  expect(wrapper).toMatchSnapshot();
});
