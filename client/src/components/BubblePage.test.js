import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../App";

test("Fetches data and renders the bubbles", () => {
  render(<App />);
  const username = screen.getByPlaceholderText('Username');
  const password = screen.getByPlaceholderText('Password');
  const loginButton = screen.getByRole('button');
  const lock = screen.getByText('Protected Page');

  fireEvent.change(username, { target: {value: 'Lambda School'}});

  fireEvent.change(password, { target: {value: "i<3Lambd4"}});
  fireEvent.click(loginButton);
  fireEvent.click(lock);


  const bubbles = screen.getByText('bubbles');
});
