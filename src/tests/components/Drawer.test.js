import React from "react";
import { shallow } from "enzyme";
import Drawer from "../../components/Drawer";

import { response } from "../fixtures/response.fixtures";

describe("<Drawer />", () => {
  it("should render Drawer without data", () => {
    const wrapper = shallow(<Drawer />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render Drawer with data", () => {
    const wrapper = shallow(<Drawer data={response} />);
    expect(wrapper).toMatchSnapshot();
  });
});
