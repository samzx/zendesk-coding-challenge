import React from "react";
import { shallow } from "enzyme";
import List from "../../components/List";

import { threeTickets, zeroTickets } from "../fixtures/tickets.fixtures";
import { response } from "../fixtures/response.fixtures";

describe("<List />", () => {
  it("should render List without data", () => {
    const wrapper = shallow(<List />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render List with data", () => {
    const wrapper = shallow(<List data={response} />);
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
  it("should generate 25 Listings", () => {
    const wrapper = shallow(<List />);
    expect(wrapper.instance().generateList(response.tickets)).toHaveLength(
      25
    );
  });
  it("should generate 0 Listings", () => {
    const wrapper = shallow(<List />);
    expect(wrapper.instance().generateList(zeroTickets.tickets)).toHaveLength(
      0
    );
  });
});
