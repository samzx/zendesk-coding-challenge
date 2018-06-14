import React from "react";
import { shallow } from "enzyme";

import Details from "../../components/Details";
import { toReadableTime } from "../../components/Details";
import { response } from "../fixtures/response.fixtures";

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
    const wrapper = shallow(<Details data={response} currentTicket={276} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("<Details/>'s toReadableTime function", () => {
  it("converts time to be more readable", () => {
    const readable = toReadableTime("2018-06-07T13:13:19Z");
    expect(readable).toEqual("Thu Jun 07 2018 23:13:19 GMT+1000 (AEST)");
  });
});
