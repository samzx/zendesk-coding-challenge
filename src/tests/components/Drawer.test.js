import React from "react";
import { shallow } from "enzyme";
import Drawer from "../../components/Drawer";

describe("<Drawer />", () => {
  it("should render Drawer correctly", () => {
    const wrapper = shallow(<Drawer />);
    expect(wrapper).toMatchSnapshot();
  });
});
