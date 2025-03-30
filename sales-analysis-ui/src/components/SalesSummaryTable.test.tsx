import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SalesSummaryTable from "../components/SalesSummaryTable";
import { SaleRecord } from "../types/SaleRecord";
import { formatDate } from "../utils/formatDate";

jest.mock("../utils/formatDate", () => ({
    formatDate: jest.fn((date) => `Formatted(${date})`),
}));

describe("SalesSummaryTable Component", () => {
    const mockSales: SaleRecord[] = [
        {
            segment: "Government",
            country: "USA",
            product: "Product A",
            discountBand: "None",
            unitsSold: 100,
            manufacturingPrice: 10,
            salePrice: 20,
            date: "2024-03-29",
            profit: 1000,
        },
        {
            segment: "Enterprise",
            country: "UK",
            product: "Product B",
            discountBand: "High",
            unitsSold: 200,
            manufacturingPrice: 15,
            salePrice: 30,
            date: "2024-03-30",
            profit: 3000,
        },
    ];

    test("renders table with sales data", () => {
        render(<SalesSummaryTable sales={mockSales} />);

        expect(screen.getByText("Sales Summary")).toBeInTheDocument();
        expect(screen.getByText("Segment")).toBeInTheDocument();
        expect(screen.getByText("Government")).toBeInTheDocument();
        expect(screen.getByText("Product A")).toBeInTheDocument();
        expect(screen.getByText("Enterprise")).toBeInTheDocument();
        expect(formatDate).toHaveBeenCalled();
    });

    test("handles pagination correctly", () => {
        render(<SalesSummaryTable sales={[...mockSales, ...mockSales]} />);

        const nextButton = screen.getByLabelText("Go to next page");
        fireEvent.click(nextButton);
        expect(screen.getByText("Sales Summary")).toBeInTheDocument();
    });
});
