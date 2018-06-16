import React from "react";
import { shallow } from "enzyme";

import Details from "../../components/Details";
import { toReadableTime } from "../../components/Details";
import { response, firstElement } from "../fixtures/response.fixtures";

describe("<Details/>", () => {
  it("should render Details correctly with no data, no ticket selected", () => {
    const wrapper = shallow(<Details />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render Details correctly with data, no ticket selected", () => {
    const wrapper = shallow(<Details data={response} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render Details correctly with data, with ticket 276 selected", () => {
    const wrapper = shallow(
      <Details data={response} currentTicket={firstElement.id} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe("<Details />'s time display", () => {
  it("should shorten time to be easier to read given a valid date string", () => {
    const wrapper = shallow(<Details />);
    expect(wrapper.instance().shortenTime("2018-06-07T13:13:19Z")).toEqual(
      "6/7/2018, 11:13:19 PM"
    );
  });
  it("should not show time given a invalid date string", () => {
    const wrapper = shallow(<Details />);
    expect(wrapper.instance().shortenTime("abcdefg")).toEqual("");
  });
});
