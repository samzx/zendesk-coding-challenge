import React from "react";
import { shallow } from "enzyme";
import Ticket from "../../components/Ticket";

test("should render Ticket correctly", () => {
  const wrapper = shallow(<Ticket />);
  expect(wrapper).toMatchSnapshot();
});
