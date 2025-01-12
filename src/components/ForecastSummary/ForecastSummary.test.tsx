import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { ForecastSummary } from "./ForecastSummary";

describe("ForecastSummary", () => {
  test("forecast summary renders correctly", () => {
    render(<ForecastSummary asteroidCount={10} hazardousAsteroidCount={2} />);
    expect(screen.getByTestId("forecast-summary")).toBeDefined();
  });
});
