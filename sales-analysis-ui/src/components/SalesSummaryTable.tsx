import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, Typography, styled } from "@mui/material";
import { SaleRecord } from "../types/SaleRecord.ts";
import { formatDate } from "../utils/formatDate.ts";


// Styled components for alternating row colors
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // Add hover effect
    "&:hover": {
        backgroundColor: theme.palette.action.selected,
    },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    fontWeight: "bold",
    fontSize: "0.9rem",
}));

/**
 * SalesSummaryTable component to display sales data in a table format.
 * @param {Array} sales - Array of sales data.
 * @returns {JSX.Element} - Rendered table component.
 */
const SalesSummaryTable: React.FC<{ sales: SaleRecord[] }> = ({ sales }) => {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    // Handle page change
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    // Handle rows per page change
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Paginate sales data
    const paginatedSales = sales.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2, overflow: "hidden" }}>
            <Typography variant="h6" component="div" sx={{ padding: 2, fontWeight: "bold", textAlign: "center" }}>
                Sales Summary
            </Typography>
            <Table sx={{ minWidth: 650 }} aria-label="sales summary table" stickyHeader={true}>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Segment</StyledTableCell>
                        <StyledTableCell>Country</StyledTableCell>
                        <StyledTableCell>Product</StyledTableCell>
                        <StyledTableCell>Discount Band</StyledTableCell>
                        <StyledTableCell>Units Sold</StyledTableCell>
                        <StyledTableCell>Manufacturing Price</StyledTableCell>
                        <StyledTableCell>Sale Price</StyledTableCell>
                        <StyledTableCell>Date</StyledTableCell>
                        <StyledTableCell>Profit</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {paginatedSales.map((sale, index) => (
                        <StyledTableRow key={index}>
                            <TableCell>{sale.segment}</TableCell>
                            <TableCell>{sale.country}</TableCell>
                            <TableCell>{sale.product}</TableCell>
                            <TableCell>{sale.discountBand}</TableCell>
                            <TableCell>{sale.unitsSold}</TableCell>
                            <TableCell>£{sale.manufacturingPrice}</TableCell>
                            <TableCell>£{sale.salePrice}</TableCell>
                            <TableCell>{formatDate(sale.date)}</TableCell> {/* Format the date */}
                            <TableCell>{sale.profit}</TableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={sales.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </TableContainer>
    );
};

export default SalesSummaryTable;