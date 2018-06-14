import React from "react";
import { shallow } from "enzyme";
import Dashboard from "../../components/Dashboard";

import { response } from "../fixtures/response.fixtures";

describe("<Dashboard />", () => {
  it("should render <Dashboard /> without data", () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render <Dashboard /> with data", () => {
    const wrapper = shallow(<Dashboard />);
    wrapper.setState({ data: response });
    expect(wrapper).toMatchSnapshot();
  });
});
