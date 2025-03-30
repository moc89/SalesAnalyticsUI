import React from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Box } from "@mui/material";
import { groupByCountry } from "../utils/groupByCountry";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface SalesChartProps {
    sales: { country: string; profit: number }[];
}

const SalesChart: React.FC<SalesChartProps> = ({ sales }) => {
    const groupedSales = groupByCountry(sales);

    // Prepare data for the chart
    const chartData = {
        labels: groupedSales.map((sale) => sale.country), // X-axis labels
        datasets: [
            {
                label: "Profit",
                data: groupedSales.map((sale) => sale.profit), // Y-axis data
                backgroundColor: "rgba(75, 192, 192, 0.6)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
            title: {
                display: true,
                text: "Profit by Country",
            },
        },
    };

    return <Box sx={{ width: "100%", height: "400px" }}>
        <Bar data={chartData} options={chartOptions} />
    </Box>;
};

export default SalesChart;
