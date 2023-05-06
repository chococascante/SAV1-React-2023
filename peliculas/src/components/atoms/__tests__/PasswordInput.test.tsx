import { render, fireEvent, act } from "@testing-library/react";
import { PasswordInput } from "../PasswordInput";

describe("atom/PasswordInput", () => {
  it("should render", () => {
    render(<PasswordInput />);
  });

  it("should change type when click on icon", () => {
    // Arrange
    const wrapper = render(<PasswordInput value="12345678" />);
    const iconButton = wrapper.getByTestId("password-input-icon");

    // Assert
    expect(wrapper.queryByDisplayValue("12345678")).toHaveAttribute(
      "type",
      "password"
    );

    // Act
    act(() => {
      fireEvent.click(iconButton);
    });

    // Assert
    expect(wrapper.queryByDisplayValue("12345678")).toHaveAttribute(
      "type",
      "text"
    );
  });

  it("should change icon when click on icon", () => {
    // Arrange
    const wrapper = render(<PasswordInput />);
    const iconButton = wrapper.getByTestId("password-input-icon");

    // Assert
    const visibilityOn = wrapper.getByTestId("visibility-on");
    expect(visibilityOn).toBeInTheDocument();

    // Act
    act(() => {
      fireEvent.click(iconButton);
    });

    const visibilityOff = wrapper.getByTestId("visibility-off");
    expect(visibilityOff).toBeInTheDocument();
  });
});
