
export const groupByCountry = (sales: { country: string; profit: number }[]) => {
    const grouped: { [key: string]: number } = {};

    sales.forEach((sale) => {
        if (grouped[sale.country]) {
            grouped[sale.country] += sale.profit;
        } else {
            grouped[sale.country] = sale.profit;
        }
    });

    return Object.entries(grouped).map(([country, profit]) => ({
        country,
        profit,
    }));
};