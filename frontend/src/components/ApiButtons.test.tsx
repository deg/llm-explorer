import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ApiButtons from "./ApiButtons";

test("renders buttons and handles clicks", async () => {
  render(<ApiButtons />);

  const fetchButton = screen.getByText("Fetch Data");
  await userEvent.click(fetchButton);

  const sendButton = screen.getByText("Send Data");
  await userEvent.click(sendButton);

  expect(fetchButton).toBeInTheDocument();
  expect(sendButton).toBeInTheDocument();
});
