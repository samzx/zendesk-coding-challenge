import React from "react";
import { shallow } from "enzyme";
import Pagination from "../../components/Pagination";

describe("<Pagination />", () => {
  it("should render Pagination correctly", () => {
    const wrapper = shallow(<Pagination />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should create 0 buttons from 0 items", () => {
    const wrapper = shallow(<Pagination />);
    expect(wrapper.instance().createPagination(0)).toHaveLength(0);
  });
  it("should create 1 button from 24 items", () => {
    const wrapper = shallow(<Pagination />);
    expect(wrapper.instance().createPagination(24)).toHaveLength(1);
  });
  it("should create 1 button from 25 items", () => {
    const wrapper = shallow(<Pagination />);
    expect(wrapper.instance().createPagination(25)).toHaveLength(1);
  });
  it("should create 2 buttons from 26 items", () => {
    const wrapper = shallow(<Pagination />);
    expect(wrapper.instance().createPagination(26)).toHaveLength(2);
  });
});
