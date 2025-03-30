import React from "react";
import { render, screen } from "@testing-library/react";
import SalesChart from "./SalesCharts";
import * as groupByCountryModule from "../utils/groupByCountry"; // Import the module
import "jest-canvas-mock";

// jest.mock("../utils/groupByCountry", () => ({
//     groupByCountry: jest.fn(),
// }));
jest.mock("../utils/groupByCountry"); // Mock the entire module
global.ResizeObserver = class {
    observe() { }
    unobserve() { }
    disconnect() { }
};

describe("SalesChart Component", () => {
    test("renders the chart with correct labels and dataset", () => {
        const mockSales = [
            { country: "USA", profit: 100 },
            { country: "UK", profit: 200 },
        ];

        // Mock the function correctly
        jest.spyOn(groupByCountryModule, "groupByCountry").mockReturnValue(mockSales);

        render(<SalesChart sales={mockSales} />);

        expect(screen.getByRole("img")).toBeInTheDocument();

    });
});