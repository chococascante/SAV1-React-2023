import { render } from "@testing-library/react";
import { TextInput } from "../TextInput";

describe("atoms/TextInput", () => {
  it("should render correctly", () => {
    // Arrange
    render(<TextInput />);
  });

  it("should render with helperText when error prop is true and helperText prop is defined", () => {
    // Arrange
    const wrapper = render(<TextInput error helperText="helper text" />);
    // Act
    const helperText = wrapper.getByText("helper text");
    // Assert
    expect(helperText).toBeDefined();
  });
});
