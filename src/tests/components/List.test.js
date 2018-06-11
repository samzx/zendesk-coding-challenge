import React from "react";
import { shallow } from "enzyme";
import List from "../../components/List";

import { threeTickets, zeroTickets } from "../fixtures/List.fixtures";

describe("<List />", () => {
  it("should render List correctly", () => {
    const wrapper = shallow(<List />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("<List />'s generateList function", () => {
  it("should generate 3 Listings", () => {
    const wrapper = shallow(<List />);
    expect(wrapper.instance().generateList(threeTickets.tickets)).toHaveLength(
      3
    );
  });
  it("should generate 0 Listings", () => {
    const wrapper = shallow(<List />);
    expect(wrapper.instance().generateList(zeroTickets.tickets)).toHaveLength(
      0
    );
  });
});
