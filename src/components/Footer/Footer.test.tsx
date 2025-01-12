import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer.tsx";

describe("Footer", () => {
  test("footer renders correctly", () => {
    render(<Footer />);
    expect(screen.getByTestId("footer")).toBeDefined();
  });

  test("copyright renders correctly", () => {
    render(<Footer />);
    expect(screen.getByTestId("copyright")).toBeDefined();
  });

  test("footer links renders correctly", () => {
    render(<Footer />);
    expect(screen.getByTestId("footer-links")).toBeDefined();
  });
});
