import { useEffect, useState } from "react";
import axios from "axios";
import { Typography, Box, Card, CardContent, Stack } from "@mui/material";
import { SaleRecord } from "../types/SaleRecord.ts";
import SalesSummaryTable from "../components/SalesSummaryTable.tsx";
import SalesChart from "../components/SalesCharts.tsx";


const SalesDashboard = () => {
    const API_URL = process.env.SALES_API_URL;
    const [saleSummary, setSaleSummary] = useState<SaleRecord[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setTimeout(() => {
            axios
                .get(`${API_URL}/sales`)
                .then((response) => {
                    setSaleSummary(response.data);
                    setLoading(false); // Stop loading once data is fetched
                })
                .catch((error) => {
                    console.error("Error fetching products:", error);
                    setError("Failed to load data");
                    setLoading(false); // Stop loading even if there's an error
                });
        }, 2000); // 2-second delay
    }, []);

    return (
        <>
            {loading && (
                <Box sx={{
                    flexGrow: 1,
                    fontWeight: "bold",
                    textAlign: "center",
                    letterSpacing: 1.5,
                    width: "100vw",
                }}>
                    <Typography variant="h6">Loading...</Typography>
                </Box>
            )}
            {error && (
                <Box sx={{ textAlign: "center", padding: 4 }}>
                    <Typography variant="h6" color="error">
                        {error}
                    </Typography>
                </Box>
            )}
            {!loading && !error && (
                <>
                    {/* Main Content */}
                    < Box
                        sx={{
                            width: "100vw", // Full viewport width
                            padding: 4,
                            boxSizing: "border-box",
                        }}
                    >
                        <Stack
                            direction={{ xs: "column", md: "row" }}
                            spacing={4}
                            justifyContent="space-between"
                            alignItems="stretch"
                        >
                            {/* Table */}
                            <Card sx={{ flex: 2 }}>
                                <CardContent>
                                    <SalesSummaryTable sales={saleSummary} />
                                </CardContent>
                            </Card>

                            {/* Chart */}
                            <Card sx={{ flex: 1, padding: 2 }}>
                                <CardContent>
                                    <SalesChart sales={saleSummary} />
                                </CardContent>
                            </Card>
                        </Stack>


                    </Box >
                </>
            )}

        </>
    );
};

export default SalesDashboard;
