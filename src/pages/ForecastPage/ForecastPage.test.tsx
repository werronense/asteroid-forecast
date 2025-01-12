import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import ForecastPage from "./ForecastPage.tsx";
import { DailyForecast } from "./ForecastPage.tsx";

const testForecast: DailyForecast[] = [];

describe("ForecastPage", () => {
  test("forecast page renders correctly", () => {
    render(<ForecastPage forecast={testForecast} />);
    expect(screen.getByTestId("forecast")).toBeDefined();
  });

  test("forecast summary renders correctly", () => {
    render(<ForecastPage forecast={testForecast} />);
    expect(screen.getByTestId("forecast-summary")).toBeDefined();
  });

  test("forecast list renders correctly", () => {
    render(<ForecastPage forecast={testForecast} />);
    expect(screen.getByTestId("forecast-list")).toBeDefined();
  });
});
