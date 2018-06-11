import React from "react";
import { shallow } from "enzyme";
import List from "../../components/List";

import threeTickets from "../fixtures/threeTickets";

describe("<List />", () => {
  it("should render List correctly", () => {
    const wrapper = shallow(<List />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should generate 3 Listings", () => {
    const wrapper = shallow(<List />);
    expect(wrapper.instance().generateList(threeTickets.tickets)).toHaveLength(
      3
    );
  });
});
