import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EditableField } from "./EditableField.jsx";
import { useState } from "react";

function Wrapper({ initial }) {
  const [value, setValue] = useState(initial);
  return (
    <EditableField
      label="Display name"
      value={value}
      onChange={(next) => setValue(next.toUpperCase())}
    />
  );
}

describe("EditableField", () => {
  it("should stay in sync with parent updates after local edits", async () => {
    const user = userEvent.setup();
    render(<Wrapper initial="Ada" />);

    const input = screen.getByLabelText(/display name/i);
    expect(input).toHaveValue("Ada");

    await user.clear(input);
    await user.type(input, "ada");
    // parent uppercases value
    expect(input).toHaveValue("ADA");

    // parent forces another update
    render(<Wrapper initial="Grace" />);
    expect(screen.getByLabelText(/display name/i)).toHaveValue("Grace");
  });
});
