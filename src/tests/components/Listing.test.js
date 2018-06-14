import React from "react";
import { shallow } from "enzyme";
import Listing from "../../components/Listing";

import { response } from "../fixtures/response.fixtures";

describe("<Listing />", () => {
  it("should render Listing correctly", () => {
    const wrapper = shallow(<Listing />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render Listing correctly", () => {
    const wrapper = shallow(<Listing listing={response.tickets[0]} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("<Listing />'s priority display", () => {
  it("should convert urgent to 4 stars", () => {
    const wrapper = shallow(<Listing />);
    expect(wrapper.instance().visualPriority("urgent")).toEqual("★★★★");
  });
  it("should convert high to 3 stars", () => {
    const wrapper = shallow(<Listing />);
    expect(wrapper.instance().visualPriority("high")).toEqual("★★★");
  });
  it("should convert normal to 2 stars", () => {
    const wrapper = shallow(<Listing />);
    expect(wrapper.instance().visualPriority("normal")).toEqual("★★");
  });
  it("should convert low to 1 stars", () => {
    const wrapper = shallow(<Listing />);
    expect(wrapper.instance().visualPriority("low")).toEqual("★");
  });
  it("should convert unknown string to 0 stars", () => {
    const wrapper = shallow(<Listing />);
    expect(wrapper.instance().visualPriority("")).toEqual("");
  });
});

describe("<Listing />'s time display", () => {
  it("should shorten time to be easier to read given a valid date string", () => {
    const wrapper = shallow(<Listing />);
    expect(
      wrapper.instance().shortenTime("Thu Jun 07 2018 23:13:19 GMT+1000 (AEST)")
    ).toEqual("Thu Jun 07 2018 23:13:19");
  });
  it("should not show time given a invalid date string", () => {
    const wrapper = shallow(<Listing />);
    expect(wrapper.instance().shortenTime("abcdefg")).toEqual("");
  });
});

describe("<Listing />'s handleClick", () => {
  const mockSetTicket = props => {
    throw "ticket set";
  };
  it("should not set ticket if loading", () => {
    const wrapper = shallow(
      <Listing setTicket={mockSetTicket} loading={false} />
    );
    expect(() => {
      wrapper.instance().handleClick();
    }).toThrow("ticket set");
  });
  it("should set ticket if not loading", () => {
    const wrapper = shallow(
      <Listing setTicket={mockSetTicket} loading={true} />
    );
    expect(wrapper.instance().handleClick());
  });
});
