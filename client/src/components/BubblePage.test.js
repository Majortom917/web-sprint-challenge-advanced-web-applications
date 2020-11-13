import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../App";

test("Fetches data and renders the bubbles", () => {
  render(<App/>)
});
