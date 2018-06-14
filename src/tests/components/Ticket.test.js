import React from "react";
import { shallow } from "enzyme";
import Ticket from "../../components/Ticket";

import { response } from "../fixtures/response.fixtures";

describe("<Ticket />", () => {
  const id = 276;
  it("should render Ticket correctly without data, without current ticket", () => {
    const wrapper = shallow(<Ticket />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render Ticket correctly without data, with current ticket", () => {
    const wrapper = shallow(<Ticket currentTicket={id} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render Ticket correctly with data, without current ticket", () => {
    const wrapper = shallow(<Ticket data={response} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render Ticket correctly with data, with current ticket", () => {
    const wrapper = shallow(<Ticket data={response} currentTicket={id} />);
    expect(wrapper).toMatchSnapshot();
  });
});
