import React from "react";
import { shallow } from "enzyme";

import SubscriptionDetails from "./SubscriptionDetails";

describe("SubscriptionDetails", () => {
  it("initially shows the content", () => {
    const wrapper = shallow(<SubscriptionDetails onCloseModal={jest.fn()} />);
    expect(wrapper.find("DetailsContent").exists()).toBe(true);
    expect(wrapper.find("SubscriptionEdit").exists()).toBe(false);
  });

  it("can show the edit form", () => {
    const wrapper = shallow(<SubscriptionDetails onCloseModal={jest.fn()} />);
    wrapper.find("[data-test='edit-button']").simulate("click");
    expect(wrapper.find("SubscriptionEdit").exists()).toBe(true);
    expect(wrapper.find("DetailsContent").exists()).toBe(false);
  });

  it("disables the buttons when showing the edit form", () => {
    const wrapper = shallow(<SubscriptionDetails onCloseModal={jest.fn()} />);
    expect(wrapper.find("[data-test='edit-button']").prop("disabled")).toBe(
      false
    );
    expect(wrapper.find("[data-test='cancel-button']").prop("disabled")).toBe(
      false
    );
    wrapper.find("[data-test='edit-button']").simulate("click");
    expect(wrapper.find("[data-test='edit-button']").prop("disabled")).toBe(
      true
    );
    expect(wrapper.find("[data-test='cancel-button']").prop("disabled")).toBe(
      true
    );
  });

  it("can close the modal", () => {
    const onCloseModal = jest.fn();
    const wrapper = shallow(
      <SubscriptionDetails onCloseModal={onCloseModal} />
    );
    wrapper.find(".p-modal__close").simulate("click");
    expect(onCloseModal).toHaveBeenCalled();
  });
});
